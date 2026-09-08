@extends('backend.adminlayouts.master')

@section('body')

    <!-- Page header -->

    <h3 class="text-gray-700 text-3xl font-medium">Transazioni</h3>

    <!-- Activity table (small breakpoint and up) -->

    <livewire:transactions></livewire:transactions>
@endsection
