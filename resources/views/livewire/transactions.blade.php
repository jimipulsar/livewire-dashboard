<div class="mt-8">
    <div style="width: 100% !important;max-width: 450px">
        <div class="search-style-2 my-4">
            <div wire:loading id="pageloader" style="display:none;">
                <img src="/uploads/gif/loader.gif" alt="Caricamento..." style="background-size:cover;width:50px;"/>
            </div>
            <form>
                <label for="default-search"
                       class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input wire:model.live="searchOrder" type="search" id="default-search"
                           class="block p-4 pl-10 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Cerca transazione..." required>
                    {{--                        <button type="submit" class="btn px-6  py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-900  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  absolute right-2.5 bottom-2.5">Cerca</button>--}}
                </div>
            </form>
        </div>
    </div>
    <div class="flex flex-col mt-4">
        <div class="align-middle overflow-x-auto shadow sm:rounded-lg mb-4">
            <table class="min-w-full divide-y divide-gray-200">
                <thead>
                <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID Ordine
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Dettagli cliente
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Metodo di pagamento
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Totale
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Stato
                    </th>
                    <th style="cursor:pointer" wire:click="sortBy('created_at')"
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

                @foreach ($transactions as $transaction)
                    <tr class="bg-white">
                        <td class="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500">
                            <div class="flex items-center">
                                <a href="{{ route('adminOrders.show',[app()->getLocale(), $transaction->id]) }}"
                                   class="group inline-flex space-x-2 truncate text-sm">
                                    <div class="flex-shrink-0 h-10 w-10">
                                        <img class="h-10 w-10" src="/uploads/icon/order.svg"
                                             alt=""/>
                                    </div>
                                </a>
                                <a href="{{ route('adminOrders.show',[app()->getLocale(), $transaction->id]) }}"
                                   class="ml-3">


                                    <div class="text-sm leading-5 font-medium text-gray-900">
                                        # {{ $transaction->order_number }}</div>
                                </a>
                            </div>
                        </td>
                        <td class="px-6 py-4 pr-4 whitespace-nowrap text-sm text-gray-900">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10">
                                    <img class="h-10 w-10" src="/uploads/icon/avatar.svg" alt=""/>
                                </div>

                                <div class="ml-4">
                                    <div
                                        class="text-sm leading-5 font-medium text-gray-900">{{ $transaction->billing_name }}</div>
                                    <div class="text-sm leading-5 text-gray-500">{{ $transaction->email }}</div>
                                </div>
                            </div>
                        </td>
                        @if($transaction->payment_method === 'card')
                            <td class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                <img src="/uploads/icon/stripe.png" class="img-responsive" style="width:130px">
                            </td>
                        @endif
                        @if($transaction->payment_method === 'wire transfer')
                            <td class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                <img src="/uploads/icon/bonifico.png" class="img-responsive" style="width:130px">
                            </td>
                        @endif
                        <td class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                    <span
                                        class="text-gray-900 font-medium">€ {{ number_format($transaction->grand_total, 2, ',', ' ')}} </span>
                        </td>

                        @if($transaction->is_paid == '1')
                            <td class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-900">

                                <a href="{{ route('adminOrders.show',[app()->getLocale(), $transaction->id]) }}"
                                   class="group inline-flex space-x-2 text-sm">
                                    <!-- Heroicon name: solid/cash -->
                                    <svg
                                        class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                              clip-rule="evenodd"/>
                                    </svg>

                                    <p class=" text-gray-500 group-hover:text-gray-900">
                                        Pagamento ricevuto
                                    </p>

                                </a>

                            </td>
                        @endif

                        <td class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                            <time
                                datetime="11/06/2005">{{ Carbon\Carbon::parse($transaction->created_at)->format('d/m/Y H:s') }}</time>
                        </td>
                    </tr>
                    <!-- Pagination -->
                @endforeach


                <!-- More transactions... -->
                </tbody>
            </table>
            <!-- Pagination -->

        </div>

    </div>
    @if(isset($query))
        {{ $transactions->appends($query)->onEachSide(1)->links() }}
    @else
        {{ $transactions->onEachSide(1)->links('vendor.livewire.tailwind') }}
    @endif

</div>
