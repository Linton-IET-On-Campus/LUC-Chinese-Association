<?php

namespace App;
use Redirect,Response,DB,Config;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $fillable = ['member_name','member_phone','member_email'];
    protected $guarded = [];
    protected $table = 'member';
    
    public function storeData($request){
    	$member = Member::create([
            'member_name'=>request('member_name'),
            'member_phone'=>request('member_phone'),
            'member_email'=>request('member_email')
        ]);
        $member_sub = $request->row;
        $insert_ary = [];
        foreach ($member_sub as $key => $value) {
            $insert_ary[$key] = $value;
            $insert_ary[$key]['member_id'] = $member->id;
        }
        DB::table('member_sub')->insert($insert_ary);
    }
}
