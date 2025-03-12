<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        // Fetch all students
        $students = Student::all();

        // Return as JSON
        return response()->json($students);
    }
}
