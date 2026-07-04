<div class="" id="orderarea">
    <div class="flex flex-wrap mt-4">
            <div class="w-full pr-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ">
                <div class="search-style-2 my-4">
                    <form>
                        <label for="default-search"
                               class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                     stroke="currentColor"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input wire:model.live="searchOrder" type="search" id="default-search"
                                   class="block p-4 pl-10 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Cerca Ordine..." required>
                            {{--                        <button type="submit" class="btn px-6  py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-900  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  absolute right-2.5 bottom-2.5">Cerca</button>--}}
                        </div>
                    </form>
                </div>
            </div>
            <div class="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-6" style="float: right; margin: 0 0 0 auto; width:240px;">
                <div x-data="{ isOpen: false }" class="relative ">
                    <button type="button" @click="isOpen = !isOpen"
                            class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Filtra per stato
                        <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                             aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </button>
                    <div
                        x-show="isOpen"
                        x-transition:enter="transition ease-out duration-100 transform"
                        x-transition:enter-start="opacity-0 scale-95"
                        x-transition:enter-end="opacity-100 scale-100"
                        x-transition:leave="transition ease-in duration-75 transform"
                        x-transition:leave-start="opacity-100 scale-100"
                        x-transition:leave-end="opacity-0 scale-95"
                        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg"
                        style="width:300px;"
                    >
                        <div
                            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1" >
                                @foreach ($getStatus as $index => $thing)
                                    <ul>
                                        <li class="bg-neutral-50 px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-900/5 hover:text-neutral-900 focus-visible:bg-neutral-900/10 focus-visible:text-neutral-900 focus-visible:outline-none dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-50/5 dark:hover:text-white dark:focus-visible:bg-neutral-50/10 dark:focus-visible:text-white">
                                            <label>
                                                <input type="checkbox" wire:model.live="filters.{{$thing}}" name="ids[]"
                                                       class="form-check-input"
                                                       value="{{$thing}}">
                                                {{__($thing)}}
                                            </label>
                                        </li>
                                    </ul>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
    <div class="align-middle overflow-x-auto shadow sm:rounded-lg mb-4">
        <table class="min-w-full divide-y divide-gray-200">
            <thead>
            <tr>
                <th style="cursor:pointer" wire:click.prevent="sortBy('order_number')"
                    class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID Ordine
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="{{ $sortColumnName === 'order_number' && $sortDirection === 'asc' ? 'black' : 'currentColor' }}"
                         class="w-3 h-3 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="{{ $sortColumnName === 'order_number' && $sortDirection === 'desc' ? 'black' : 'currentColor' }}"
                         class="w-3 h-3 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"/>
                    </svg>
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dettagli Cliente
                </th>
                <th style="cursor:pointer" wire:click.prevent="sortBy('status')"
                    class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stato
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="{{ $sortColumnName === 'status' && $sortDirection === 'asc' ? 'black' : 'currentColor' }}"
                         class="w-3 h-3 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="{{ $sortColumnName === 'status' && $sortDirection === 'desc' ? 'black' : 'currentColor' }}"
                         class="w-3 h-3 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"/>
                    </svg>
                </th>
                <th style="cursor:pointer" wire:click.prevent="sortBy('grand_total')"
                    class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Totale
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="{{ $sortColumnName === 'grand_total' && $sortDirection === 'asc' ? 'black' : 'currentColor' }}"
                         class="w-3 h-3 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="{{ $sortColumnName === 'grand_total' && $sortDirection === 'desc' ? 'black' : 'currentColor' }}"
                         class="w-3 h-3 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"/>
                    </svg>
                </th>
                <th style="cursor:pointer" wire:click.prevent="sortBy('created_at')"
                    class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="{{ $sortColumnName === 'created_at' && $sortDirection === 'asc' ? 'black' : 'currentColor' }}"
                         class="w-3 h-3 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="{{ $sortColumnName === 'created_at' && $sortDirection === 'desc' ? 'black' : 'currentColor' }}"
                         class="w-3 h-3 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"/>
                    </svg>
                </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            @foreach ($orders as $order)
                <tr class="bg-white">
                    <td class="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500">
                        <div class="flex items-center">
                            <a href="{{ route('adminOrders.show',[ $order->id]) }}"
                               class="group inline-flex space-x-2 truncate text-sm">
                                <div class="flex-shrink-0 h-10 w-10">
                                    <img class="h-10 w-10" src="/uploads/icon/order.svg"
                                         alt=""/>
                                </div>
                            </a>
                            <a href="{{ route('adminOrders.show',[ $order->id]) }}"
                               class="ml-3">


                                <div class="text-sm leading-5 font-medium text-gray-900">
                                    # {{ $order->order_number }}</div>
                            </a>
                        </div>
                    </td>
                    <td class="max-width-100 px-6 py-4 pr-4 whitespace-nowrap text-sm text-gray-900">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                                <img class="h-10 w-10" src="/uploads/icon/avatar.svg" alt=""/>
                            </div>

                            <div class="ml-4">
                                <div
                                    class="text-sm leading-5 font-medium text-gray-900">{{ $order->billing_name }}</div>
                                <div class="text-sm leading-5 text-gray-500">{{ $order->email }}</div>
                            </div>
                        </div>
                    </td>

                    @if($order->status == 'completed')
                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
               <span
                   class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 ">
                 Completato
               </span>
                        </td>
                    @endif

                    @if($order->status == 'processing')
                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
               <span
                   class="inline-flex px-2.5 py-0.5 items-center rounded-full text-xs font-medium bg-yellow-300 text-warning-800 ">
                 In elaborazione
               </span>
                        </td>
                    @endif
                    @if($order->status == 'pending')
                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
               <span
                   class="inline-flex px-2.5 py-0.5 items-center rounded-full text-xs font-medium bg-soft-warning text-red-800  ">
                 In sospeso
               </span>
                        </td>
                    @endif
                    @if($order->status == 'decline')
                        <td class="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                 <span
                     class="inline-flex px-2.5 py-0.5 items-center rounded-full text-xs font-medium bg-red-800 text-white ">
                 Annullato
               </span>
                        </td>
                    @endif
                    <td class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">

             <span
                 class="text-gray-900 font-medium">€ {{ price($order->grand_total)}} </span>
                    </td>
                    <td class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                        <time
                            datetime="2020-07-11">{{ Carbon\Carbon::parse($order->created_at)->format('d/m/Y H:s') }}</time>
                    </td>
                </tr>
            @endforeach

            <!-- More transactions... -->
            </tbody>
        </table>
        <!-- Pagination -->

    </div>
    @if(isset($query))
        {{ $orders->appends($query)->onEachSide(1)->links() }}
    @else
        {{ $orders->onEachSide(1)->links('vendor.livewire.tailwind') }}
    @endif
</div>

</div>
