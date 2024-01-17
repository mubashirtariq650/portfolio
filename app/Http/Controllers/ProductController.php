<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
   public function main(){
    return view('main');
   }
   public function contact(){
    return view('contact');
   }
   public function about(){
    return view('about');
   }
   public function portfolio(){
      return view('portfolio');
   }
}


