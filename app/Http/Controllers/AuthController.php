<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Validator;

class AuthController extends Controller
{
    public function register(Request $request) {
        //Validate Input
        $validator = Validator::make($request->all(), [
            "name" => "required",
            "email" => "required|email|unique:users",
            "password" => "required",
            "c_password" => "required|same:password"
        ]);

        //Send an error response if necessary
        if ($validator->fails()) {
            return response()->json(["error"=>$validator->errors()], 401);
        }

        //Get the input, hash the password
        $input = $request->all();
        $input["password"] = bcrypt($input["password"]);

        //Use to create a user entry
        $user = User::create($input);

        //Generate a token for the user
        $success["token"] = $user->createToken("token")->accessToken;

        //Return token to user, to be stored in localstorage
        return response()->json(["success" => $success], 200);
    }

    public function login(Request $request) {
        //Check login credentials
        if (Auth::attempt([
            "email" => request("email"),
            "password" => request("password"),
        ])) {
            //Get details about the user
            $user = Auth::user();

            //Create token
            $success["token"] = $user->createToken("token")->accessToken;
            
            //Send back to user to be stored in localstorage
            return response()->json(["success" => $success], 200);
        } else {
            return response()->json(["error" => "User credentials do not match"], 200);
        }
    }

    public function logout(Request $request) {
        //Remove the token for the user
        $request->user()->token()->revoke();
        
        //Return a message
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
}
