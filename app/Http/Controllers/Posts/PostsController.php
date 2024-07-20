<?php

namespace App\Http\Controllers\Posts;

use App\Http\Controllers\Controller;
use App\Http\Requests\Posts\PostRequest;
use App\Models\Posts;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Http\Request;
use Mockery\Exception;
use function MongoDB\BSON\toJSON;

class PostsController extends Controller
{
    public function index()
    {
        echo json_encode(Posts::all());
    }

    public function store(PostRequest $request) {
        $data = $request->validated();
        try {
            Posts::create($data);
            echo json_encode([
                'status' => 201,
                'message' => 'Post created successfully!'
            ]);
        } catch (Exception $exception) {
            echo json_encode([
                'status' => 500,
                'message' => $exception->getMessage()
            ]);
        }
    }

    public function delete(Posts $post)
    {
        try {
            $post->delete();
            echo json_encode([
                'status' => 201,
                'message' => 'Post deleted successfully!'
            ]);
        } catch (Exception $exception) {
            echo json_encode([
                'status' => 500,
                'message' => $exception->getMessage()
            ]);
        }
    }
}
