@extends('backend.adminlayouts.master')

@section('body')

    <h3 class="text-gray-700 text-3xl font-medium">Modifica Product</h3>
    <div class="md:grid md:grid-cols-3 md:gap-6 mt-10 mb-10">
        <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="{{ route('sliders.update', $slide->id]) }}"
                  enctype="multipart/form-data" method="post">
                @csrf
                @method('PUT')
                <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">

                        <div class="col-span-1 sm:col-span-1 lg:col-span-2 pt-3">
                            <label class="block text-md py-2 font-medium text-gray-700">
                                Cover Image
                            </label>

                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div class="space-y-1 text-center">
                                    <img src="{{'/uploads/sliders/' . $slide->cover}}"
                                         id="img-resize">
                                    <div class="flex text-md py-2 pl-3 text-gray-600">
                                        <label for="cover"
                                               class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">

                                            <input type="file" name="text" id="cover" class="form-control">
                                        </label>
                                    </div>
                                    <p class="text-xs text-gray-500">
                                        PNG, JPG, GIF fino a 6MB
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-6 gap-6 mt-5">
                            <div class="col-span-12 sm:col-span-12">
                                <label for="title1"
                                       class="block text-sm font-medium text-gray-700">Title</label>
                                <input type="text" name="title1" id="title1"
                                       class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                       value="{{$slide->title1}}">
                            </div>

                        </div>
                        <div class="grid grid-cols-6 gap-6 mt-5">
                            <div class="col-span-12 sm:col-span-12">
                                <label for="title2"
                                       class="block text-sm font-medium text-gray-700">Sottotitolo</label>
                                <input type="text" name="title2" id="title2"
                                       class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                       value="{{$slide->title2}}">
                            </div>

                        </div>
                        <div class="grid grid-cols-6 gap-6 mt-5">
                            <div class="col-span-12 sm:col-span-12">
                                <label for="title3"
                                       class="block text-sm font-medium text-gray-700">price in evidenza</label>
                                <input type="text" name="title3" id="title3"
                                       class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                       value="{{$slide->title3}}">
                            </div>

                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 pb-10 mt-8">
                            <a href="{{url()->previous()}}"
                               class="btn px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-green-900  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center">
                                Go Back
                            </a>
                            <button type="submit"
                                    class="ml-7 btn px-6 py-2.5 bg-blue-700 hover:bg-blue-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-900  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
