@extends('layouts.app') 
@section('content')
<div class="container" style="margin-top: 20px;">
    <div class="row justify-content-center">
        <div class="col-lg-10 card-header">
            <div class="row">
                <div class="col-md-10">
                    <h6>Available Member</h6>
                </div>
                <div class="col-md-2 pull-right">
                    <a class="btn btn-success" href="{{ route('member/create') }}">
                        <div class="text-right">Add New Member</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <br/>
    <div class="row justify-content-center ">
        <div class="col-lg-10 card">
            <table class="table mb-0">
                    <thead class="bg-light">
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone No.</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        @foreach($showData as $key=>$members)
                                <tr>
                                    <td>{{ $key + 1 }}</td>
                                    <td>{{ $members->member_name }}</td>
                                    <td>{{ $members->member_phone }}</td>
                                    <td>{{ $members->member_email }}</td>

                                </tr>
                        @endforeach
                    </tbody>
            </table>
        </div>
    </div>
</div>
<style type="text/css">
    .card-header {
        border-radius: .625rem !important;
        box-shadow: 0 0.46875rem 2.1875rem rgba(90,97,105,.1), 
                    0 0.9375rem 1.40625rem rgba(90,97,105,.1), 
                    0 0.25rem 0.53125rem rgba(90,97,105,.12), 
                    0 0.125rem 0.1875rem rgba(90,97,105,.1);
    }
</style>
@endsection