<?php

namespace App\Http\Controllers;

use App\Member;
use Illuminate\Http\Request;
use Auth;
use Redirect,Response,DB,Config;
use App\Http\Controllers\Controller;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $showData = Member::latest()->get();
        return view('member/index',compact('showData'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $rowReplace = 0;
        return view('member/create', compact("rowReplace"));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'member_name' => 'required|max:255|unique:members',
            'member_phone' => 'required|max:255',
            'member_email' => 'required|max:255',
        ],[
            'member_name.required' => 'Member name is required.',
            'row.*.month.required' => 'Month is required.',
            'row.*.status.required' => 'Status is required.',
        ]);
        $storeData = new Member;
        $storeData = $storeData->storeData($request);
        return redirect()->route('member');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function show(Member $member)
    {
       
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function edit(Member $member)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Member $member)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function destroy(Member $member)
    {
        //
    }
}
