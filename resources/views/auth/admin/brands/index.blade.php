@extends('backend.adminlayouts.master')

@section('body')
    <h3 class="text-gray-700 text-3xl font-medium">{{ __('home.features.10') }}</h3>
    <nav class="text-sm font-medium text-on-surface dark:text-on-surface-dark mt-3" aria-label="breadcrumb">
        <ol class="flex flex-wrap items-center gap-1">
            <li class="flex items-center gap-1">
                <a href="{{route('dashboard')}}" class="hover:text-on-surface-strong dark:hover:text-on-surface-dark-strong">Home</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" stroke-width="2" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </li>
            <li class="flex items-center text-on-surface-strong gap-1 font-bold dark:text-on-surface-dark-strong" aria-current="page">{{ __('home.features.10') }}</li>
        </ol>
    </nav>
    <div class="mt-10 mb-6">
        <div class=" text-left">
            <a href="{{route('brands.create')}}"
               class="btn px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-green-900  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out items-center">
                Nuovo Marchio
            </a>
        </div>
    </div>
    <livewire:brand-product></livewire:brand-product>
@endsection
