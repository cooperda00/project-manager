<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    public function index()
    {
        $tasks = Task::orderBy("created_at", "desc")
                            ->get();

        return $tasks;
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate(['title' => 'required']);

        $task = Task::create([
          'title' => $validatedData['title'],
          'project_id' => $request->project_id,
        ]);

        return $task;
    }

    public function markAsCompleted(Request $request, Task $task)
    {
        $task->is_completed = true;
        $task->update();

        return response()->json('COMPLETED');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        $task->delete();

        return response()->json("DELETED");
    }
}
