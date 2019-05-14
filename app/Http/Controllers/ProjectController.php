<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        $userId = Auth()->user()->id;

        $projects = Project::where("user_id", "=", $userId)
                            ->orderBy("created_at", "desc")
                            ->withCount("tasks")
                            ->get();

        return $projects;
    }

    public function store(Request $request)
    {
        $userId = Auth()->user()->id;

        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        $project = Project::create([
            'name' => $validatedData['name'],
            'description' => $validatedData['description'],
            "user_id" => $userId
        ]);

        $res = [
            "id" => $project->id,
            "message" => "success"
        ];

        return response()->json($res);
    }

    public function show($id)
    {
        $project = Project::with("tasks")->find($id);

        return $project;
    }

    public function update(Request $request, Project $project)
    {   
        //Get request data
        $completed = $request->input("is_complete");
        $name = $request->input("name");
        $description = $request->input("description");

        //Check what to update
        if ($completed) {
            $project->is_completed = $completed;
        }
        if ($name) {
            $project->name= $name;
        }
        if ($description) {
            $project->description= $description;
        }

        //Save
        $project->update();

        // Send Response
        return response()->json('Project updated!');
                     
    }

    public function destroy(Project $project)
    {
        $project->delete();

        return response()->json("Project deleted");
    }
}
