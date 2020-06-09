@extends('layouts.app')
@section('content')
<div class="container" style="margin-top: 20px;">
    <div class="row justify-content-center">
        <div class="col-lg-10 card-header">
            <div class="row">
                <div class="col-md-10">
                    <h6>Create New Marksheet</h6>
                </div>
                <div class="col-md-2 pull-right">
                    <a class="btn btn-success" href="{{ route('member') }}">
                        <div class="text-right">Back</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <br/>
    <div class="container">
        @if(Session::has('success'))
            <div class="alert alert-success">
                {{Session::get('success')}}
            </div>
        @endif
        <form action="{{ route('member/store') }}" method="POST">
            {{csrf_field()}}
            <section>
                <div class="form-group {{ $errors->has('member_name') ? 'has-error' : '' }}">
                    @csrf
                    <label class="label">Member Name:</label>
                    <input type="text" name="member_name" class="form-control member_name" value="{{ old('member_name') }}" />
                    <span class="text-danger">{{ $errors->first('member_name') }}</span>
                </div>
                    <div class="form-group {{ $errors->has('member_phone') ? 'has-error' : '' }}">
                        <label class="label">Member phone:</label>
                        <input type="text" name="member_phone" class="form-control" value="{{ old('member_phone') }}" />
                        <span class="text-danger">{{ $errors->first('member_phone') }}</span>
                    </div>
                    <div class="form-group {{ $errors->has('member_email') ? 'has-error' : '' }}">
                        <label class="label">Member email:</label>
                        <input type="text" name="member_email" class="form-control" value="{{ old('member_email') }}" />
                        <span class="text-danger">{{ $errors->first('member_email') }}</span>
                    </div>
                <div class="panel panel-footer">
                    <table class="table table-bordered" id="crud_table">
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Status</th>
                                <th>
                                    <a href="#" class="btn btn-primary addRow">
                                        <i class="material-icons">add</i>
                                    </a>
                                </th>
                            </tr>
                        </thead>
                                @if(old('row')!= '')
                                    <tbody class="validation-tbody-destination" id="validation-tbody-destination">
                                        <?php 
                                        $old_row = old('row');
                                        $rowReplace = count($old_row);
                                        ?>
                                        @foreach($old_row as $key=>$value)
                                            <tr class="num-row main_data validation" id="num-row">
                                                <td>
                                                    <div class="form-group {{ $errors->has("row.$key.month") ? 'has-error' : '' }}">
                                                        <input type="text" name="row[{{$key}}][month]" class="form-control month" id="month" value="{{ $value['month'] }}">
                                                        <span class="text-danger">{{ $errors->first("row.$key.month") }}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="form-group {{ $errors->has("row.$key.status") ? 'has-error' : '' }}">
                                                        <input type="text" name="row[{{$key}}][status]" class="form-control status" id="status" value="{{ $value['status'] }}">
                                                        <span class="text-danger">{{ $errors->first("row.$key.status") }}</span>
                                                    </div>
                                                </td>
                                                <td><a href="#" class="btn btn-danger remove"><i class="material-icons">remove</i></a></td>
                                            </tr>
                                        @endforeach 
                                    </tbody>
                                @else
                                    <tbody class="original-tbody-destination" id="original-tbody-destination">
                                    </tbody>
                                @endif
                        <tfoot>
                            <tr>
                                <td></td>

                                <td><input type="submit" value="Submit" class="btn btn-success submit" id="submit"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
        </form>
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
@section('script')
<script type="text/javascript">
    $('tbody .main_data').delegate('.month,.status','keyup',function(){
        var tr = $(this).parent().parent();
        var subject=tr.find('.month').val();
        var status=tr.find('.status').val();
    });
    var int = "{{ $rowReplace }}"; 
    function addRow(){
            var tr='<tr class="table_field main_data " id="table_field-'+ (int) +'">'+
                '<td><input type="text" name="row['+ (int) +'][month]" class="form-control month" id="month"></td>'+
                '<td><input type="text" name="row['+ (int) +'][status]" class="form-control status"  maxlength="3" id="status"></td>'+
                '<td><a href="#" class="btn btn-danger remove"><i class="material-icons">remove</i></a></td>'+
                '</tr>';
            $('.original-tbody-destination').append(tr);
            int++;
    };
    $(function() {
        $('.addRow').trigger("click");
    });
    $('.addRow').on('click',function(){
        addRow();
    });
    $('.month').bind('keyup blur',function(){ 
        var node = $(this);
        node.val(node.val().replace(/[^a-zA-Z]/g,'') ); 
    });
    $('.member_name').bind('keyup blur',function(){ 
        var node = $(this);
        node.val(node.val().replace(/[^a-zA-Z ]/g,'') );
    });
    
 
</script>
@endsection