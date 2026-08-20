@extends('backend.adminlayouts.master')

@section('body')
    <h3 class="text-gray-700 text-3xl font-medium mb-6">Dashboard</h3>
    <div class="mt-4">
        <div class="col-span-12 ">
            <div class="flex items-center ">
                <a href="" class="ml-auto flex text-theme-1 dark:text-theme-10"> <i data-feather="refresh-ccw"
                                                                                    class="w-4 h-4 mr-3"></i> Reload
                    Data </a>
            </div>
            <div class="grid grid-cols-12 gap-6 mt-5">
                <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div class="report-box zoom-in">
                        <div class="box p-5">
                            <div class="flex">
                                <i data-feather="shopping-cart" class="report-box__icon text-theme-10"></i>
                                <div class="ml-auto">
                                    @if(percentTransactions() > 0)
                                        <div class="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                                             title="{{removeDecimal(percentTransactions())}}% in più rispetto all'ultimo mese">
                                            + {{removeDecimal(percentTransactions())}}
                                            % <i data-feather="chevron-up"
                                                 class="w-4 h-4 ml-0.5"></i>
                                        </div>
                                    @endif
                                    @if(percentTransactions() < 0)
                                        <div class="report-box__indicator bg-theme-6 tooltip cursor-pointer"
                                             title="{{removeDecimal(percentTransactions())}}% in meno rispetto all'ultimo mese"> {{removeDecimal(percentTransactions())}}
                                            % <i data-feather="chevron-down"
                                                 class="w-4 h-4 ml-0.5"></i></div>
                                    @endif
                                </div>
                            </div>
                            <div class="text-3xl font-bold leading-8 mt-6">{{sellProducts() ?? 0}}</div>
                            <div class="text-base text-gray-600 mt-1">Prodotti Venduti</div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div class="report-box zoom-in">
                        <div class="box p-5">
                            <div class="flex">
                                <i data-feather="credit-card" class="report-box__icon text-theme-11"></i>
                                <div class="ml-auto">
                                    @if(percentOrders() > 0)
                                        <div class="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                                             title="{{removeDecimal(percentOrders())}}% in più rispetto all'ultimo mese">
                                            + {{removeDecimal(percentOrders())}}
                                            % <i data-feather="chevron-up"
                                                 class="w-4 h-4 ml-0.5"></i>
                                        </div>
                                    @endif
                                    @if(percentOrders() < 0)
                                        <div class="report-box__indicator bg-theme-6 tooltip cursor-pointer"
                                             title="{{removeDecimal(percentOrders())}}% in meno rispetto all'ultimo mese"> {{removeDecimal(percentOrders())}}
                                            % <i data-feather="chevron-down"
                                                 class="w-4 h-4 ml-0.5"></i></div>
                                    @endif
                                </div>
                            </div>
                            <div class="text-3xl font-bold leading-8 mt-6">{{countOrders()}}</div>
                            <div class="text-base text-gray-600 mt-1">Nuovi Ordini</div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div class="report-box zoom-in">
                        <div class="box p-5">
                            <div class="flex">
                                <i data-feather="monitor" class="report-box__icon text-theme-12"></i>
                                <div class="ml-auto">
                                    @if(percentProducts() > 0)
                                        <div class="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                                             title="{{removeDecimal(percentProducts())}}% in più rispetto all'ultimo mese">
                                            + {{removeDecimal(percentProducts())}}
                                            % <i data-feather="chevron-up"
                                                 class="w-4 h-4 ml-0.5"></i>
                                        </div>
                                    @endif
                                    @if(percentProducts() < 0)
                                        <div class="report-box__indicator bg-theme-6 tooltip cursor-pointer"
                                             title="{{removeDecimal(percentProducts())}}% in meno rispetto all'ultimo mese"> {{removeDecimal(percentProducts())}}
                                            % <i data-feather="chevron-down"
                                                 class="w-4 h-4 ml-0.5"></i></div>
                                    @endif
                                </div>
                            </div>
                            <div class="text-3xl font-bold leading-8 mt-6">{{countProducts()}}</div>
                            <div class="text-base text-gray-600 mt-1">Prodotti totali</div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div class="report-box zoom-in">
                        <div class="box p-5">
                            <div class="flex">
                                <i data-feather="user" class="report-box__icon text-theme-9"></i>
                                <div class="ml-auto">
                                    @if(percentCustomers() > 0)
                                        <div class="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                                             title="{{removeDecimal(percentCustomers())}}% in più rispetto all'ultimo mese">
                                            + {{removeDecimal(percentCustomers())}}
                                            % <i data-feather="chevron-up"
                                                 class="w-4 h-4 ml-0.5"></i>
                                        </div>
                                    @endif
                                    @if(percentCustomers() < 0)
                                        <div class="report-box__indicator bg-theme-6 tooltip cursor-pointer"
                                             title="{{removeDecimal(percentCustomers())}}% in meno rispetto all'ultimo mese"> {{removeDecimal(percentCustomers())}}
                                            % <i data-feather="chevron-down"
                                                 class="w-4 h-4 ml-0.5"></i></div>
                                    @endif
                                </div>
                            </div>
                            <div class="text-3xl font-bold leading-8 mt-6">{{getCustomers()->count()}}</div>
                            <div class="text-base text-gray-600 mt-1">Utenti Registrati</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-5">
        <div class="flex flex-wrap mt-6">
            <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 ">
                <div class="flex items-center shadow-sm rounded-md bg-white py-3 my-3 " style="height: 25rem;">
                    <livewire:livewire-pie-chart
                        key="{{ $columnChartModel->reactiveKey() }}"
                        :pie-chart-model="$columnChartModel"
                    />
                </div>
            </div>
            <div class="w-full pl-5  sm:w-1/4 md:w-1/2 lg:w-1/2 xl:w-1/2 ">

                <div class="flex items-center shadow-sm rounded-md bg-white py-3 my-3 " style="height: 25rem;">
                    <livewire:livewire-area-chart
                        key="{{ $lineChartModel->reactiveKey() }}"
                        :area-chart-model="$lineChartModel"
                    />
                </div>
            </div>

        </div>

    </div>
    <livewire:dashboard-orders></livewire:dashboard-orders>
@endsection
