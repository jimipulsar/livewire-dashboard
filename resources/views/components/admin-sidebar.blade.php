<aside class="mdc-drawer mdc-drawer--dismissible mdc-drawer--open">
    <div class="mdc-drawer__header">
        <a href="{{route('dashboard' )}}" class="brand-logo">
            <img src="/assets/images/logo.svg" alt="logo">
        </a>
    </div>
    <div class="mdc-drawer__content">
        <div class="user-info">
            <p class="name">{{auth()->guard('admin')->user()->name}}</p>
            <p class="email">{{auth()->guard('admin')->user()->email}}</p>
        </div>
        <div class="mdc-list-group">
            <nav class="mdc-list mdc-drawer-menu">
                <div class="mdc-list-item mdc-drawer-item">
                    <a class="mdc-drawer-link" href="{{route('dashboard' )}}">
                        <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">home</i>
                        Dashboard
                    </a>
                </div>
                <div class="mdc-list-item mdc-drawer-item">
                    <a class="mdc-drawer-link" href="{{route('products.index')}}">
                        <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">shopping_cart</i>
                        Prodotti
                    </a>
                </div>
                {{--                <div class="mdc-list-item mdc-drawer-item">--}}
                {{--                    <a class="mdc-expansion-panel-link" href="#" data-toggle="expansionPanel" data-target="ui-sub-menu">--}}
                {{--                        <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">dashboard</i>--}}
                {{--                        UI Features--}}
                {{--                        <i class="mdc-drawer-arrow material-icons">chevron_right</i>--}}
                {{--                    </a>--}}
                {{--                    <div class="mdc-expansion-panel" id="ui-sub-menu">--}}
                {{--                        <nav class="mdc-list mdc-drawer-submenu">--}}
                {{--                            <div class="mdc-list-item mdc-drawer-item">--}}
                {{--                                <a class="mdc-drawer-link" href="pages/ui-features/buttons.html">--}}
                {{--                                    Buttons--}}
                {{--                                </a>--}}
                {{--                            </div>--}}
                {{--                            <div class="mdc-list-item mdc-drawer-item">--}}
                {{--                                <a class="mdc-drawer-link" href="pages/ui-features/typography.html">--}}
                {{--                                    Typography--}}
                {{--                                </a>--}}
                {{--                            </div>--}}
                {{--                        </nav>--}}
                {{--                    </div>--}}
                {{--                </div>--}}

                <div class="mdc-list-item mdc-drawer-item">
                    <a class="mdc-drawer-link" href="{{route('brands.index')}}">
                        <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">pie_chart_outlined</i>
                        Marchi
                    </a>
                </div>
                <div class="mdc-list-item mdc-drawer-item">
                    <a class="mdc-expansion-panel-link" href="{{route('attributes.index')}}"
                       data-toggle="expansionPanel" data-target="sample-page-submenu">
                        <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">pages</i>
                        Attributi
                    </a>
                </div>
                <div class="mdc-list-item mdc-drawer-item">
                    <a class="mdc-drawer-link" href="{{route('categories.index')}}" >
                        <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">description</i>
                        Categorie
                    </a>
                </div>
                <div class="mdc-list-item mdc-drawer-item">
                    <a class="mdc-drawer-link" href="{{route('adminOrders.index')}}">
                        <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">description</i>
                        Transazioni
                    </a>
                </div>
                <div class="mdc-list-item mdc-drawer-item">
                    <a class="mdc-drawer-link" href="{{route('customers.index')}}" >
                        <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">description</i>
                        Utenti
                    </a>
                </div>
                <div class="mdc-list-item mdc-drawer-item">
                    <a class="mdc-drawer-link" href="{{route('subscribers.index')}}"
                       target="_blank">
                        <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">description</i>
                        Newsletter
                    </a>
                </div>
                <div class="mdc-list-item mdc-drawer-item">
                    <a class="mdc-drawer-link" href="{{route('coupon.index')}}" >
                        <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">description</i>
                        Coupon
                    </a>
                </div>
                <div class="mdc-list-item mdc-drawer-item">
                    <a class="mdc-drawer-link"
                       href="{{route('logActivity')}}"
                       target="_blank">
                        <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">description</i>
                        Attività utenti
                    </a>
                </div>
                @if(auth()->guard('admin')->user()->id == 1)
                    <div class="mdc-list-item mdc-drawer-item">
                        <a class="mdc-drawer-link" href="{{route('AdminLogActivity')}}" >
                            <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                               aria-hidden="true">description</i>
                            Attività Admin
                        </a>
                    </div>
                    <div class="mdc-list-item mdc-drawer-item">
                        <a class="mdc-drawer-link"
                           href="{{route('importData')}}"
                           target="_blank">
                            <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                               aria-hidden="true">description</i>
                            Import/Export Excel
                        </a>
                    </div>
                @endif
            </nav>
        </div>
    </div>
</aside>
