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

                            <svg class="h-6 w-6 text-green-400 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>

                        </div>
                        <div class="ml-3 w-0 flex-1 pt-0.5">
                            <p class="text-sm font-medium text-gray-900">
                               <strong> Operazione completata</strong>
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
@if (session()->has('mailSuccess'))
    <div aria-live="assertive"
         class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start animated slideInRight"
         id="hideMeBack">
        <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
            <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden" style="border-radius: 10px 1px 0px 10px;margin-right: -22px;">

                <div class="p-4">
                    <div class="flex items-start">
                        <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check-circle -->

                            <svg class="h-6 w-6 text-green-400 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>

                        </div>
                        <div class="ml-3 w-0 flex-1 pt-0.5">
                            <p class="text-sm font-medium text-gray-900">
                                <strong> Operazione completata</strong>
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                                {!! __(session()->get('mailSuccess'))!!}
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
                                <strong> Attenzione!</strong>
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
    @endif
{{--@if (session()->has('danger'))--}}

{{--    <div class="flex flex-col gap-y-2  animated slideInRight" id="hideMe">--}}


{{--        <!-- Alert -->--}}
{{--        <div class="bg-red-50 border-s-4 border-red-500 p-4 dark:bg-red-800/30" role="alert" tabindex="-1" aria-labelledby="hs-bordered-red-style-label">--}}
{{--            <div class="flex">--}}
{{--                <div class="shrink-0">--}}
{{--                    <!-- Icon -->--}}
{{--                    <span class="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-200">--}}
{{--          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>--}}
{{--        </span>--}}
{{--                    <!-- End Icon -->--}}
{{--                </div>--}}
{{--                <div class="ms-3">--}}
{{--                    <h5 id="hs-bordered-red-style-label" class="text-foreground font-semibold">--}}
{{--                        Attenzione!--}}
{{--                    </h5>--}}
{{--                    <p class="text-sm text-foreground">--}}
{{--                        {!! __(session()->get('danger'))!!}--}}
{{--                    </p>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--        <!-- End Alert -->--}}
{{--    </div>--}}
{{--    <!-- End Alert Group -->--}}
{{--@endif--}}
@if (session()->has('status'))
    <div aria-live="assertive"
         class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start animated slideInRight"
         id="hideMeBack">
        <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
            <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden" style="border-radius: 10px 1px 0px 10px;margin-right: -22px;">

                <div class="p-4">
                    <div class="flex items-start">
                        <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check-circle -->

                            <svg class="h-6 w-6 text-green-400 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>

                        </div>
                        <div class="ml-3 w-0 flex-1 pt-0.5">
                            <p class="text-sm font-medium text-gray-900">
                                <strong> Operazione completata</strong>
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                                {!! __(session()->get('status'))!!}
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
