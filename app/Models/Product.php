<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
'category_id','name','purchase_price','sale_price','expiry_date','mfg_date','description'
    ];
      public function category(){
        return $this->belongsTo(Category::class);
    }
}
