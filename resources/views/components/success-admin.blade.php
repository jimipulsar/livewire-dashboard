@if (Session::has('success'))
    <div aria-live="assertive"
         class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start animated slideInRight"
         id="hideMeBack">
        <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
            <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden" style="border-radius: 10px 1px 0px 10px;margin-right: -22px;">

                <div class="p-4">
                    <div class="flex items-start">
                        <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check-circle -->

                            <svg class="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>

                        </div>
                        <div class="ml-3 w-0 flex-1 pt-0.5">
                            <p class="text-sm font-medium text-gray-900">
                                  Operazione completata
                            </p>
                                <p class="mt-1 text-sm text-gray-500">
                                     {!! __(session()->get('success'))!!}
                                </p>
                        </div>
                        <div class="ml-4 flex-shrink-0 flex">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endif
@if (Session::has('danger'))
<div aria-live="assertive"
         class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start animated slideInRight"
         id="hideMeBack">
        <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
                 <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden" style="border-radius: 10px 1px 0px 10px;margin-right: -22px;">

                <div class="p-4">
                    <div class="flex items-start">
                        <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check-circle -->

                          <svg class="h-6 w-6 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path
                                        d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
                            </svg>

                        </div>
                        <div class="ml-3 w-0 flex-1 pt-0.5">
                            <p class="text-sm font-medium text-gray-900">
                                  Attenzione!
                            </p>
                                <p class="mt-1 text-sm text-gray-500">
                                    {{ \Session::get('danger') }}
                                </p>
                        </div>
                        <div class="ml-4 flex-shrink-0 flex">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{-- <div class="rounded-md py-4 px-4 overflow-x-auto whitespace-no-wrap animated slideInRight" id="hideMeBack">

        <div class="inline-flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden ml-3">
            <div class="flex justify-center items-center w-12 bg-red-500">
                <svg class="h-6 w-6 fill-current text-white" viewBox="0 0 40 40"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"/>
                </svg>
            </div>

            <div class="-mx-3 py-2 px-4">
                <div class="mx-3">
                    <span class="text-red-500 font-semibold">Attenzione!</span>
                    <p class="text-gray-600 text-sm">{{ \Session::get('danger') }}</p>
                </div>
            </div>
        </div>
    </div> --}}
@endif


