<div class="container mb-30">
    <div class="row flex-row">
        <div class="col-lg-1-5 primary-sidebar sticky-sidebar">
            <div class="sidebar-widget-2 widget_search mb-50">
                <div class="search-form">
                    <form>
                        <input
                            wire:model.live="search"
                            wire:ref="search-box"
                            type="text"
                            name="search"
                            value=""
                            placeholder="{!!__('app.search')!!}"
                            aria-describedby="searchProduct1" id="searchProduct" class="pl-10"
                            style="background-color:#fff !important;"/>
                        <button disabled><i class="fi-rs-search"></i></button>
                    </form>
                </div>
            </div>
            <div class="sidebar-widget widget-category-2 mb-30">

                <h5 class="section-title style-1 mb-30" style="margin-top:10px !important;">Filtra per prezzo</h5>
                <div class="price-filter mb-5">
                    <div class="price-filter-inner">
                        <div id="slider" class="noUiSlider mb-20" wire:ignore></div>
                        <div class="d-flex justify-content-between">
                            <div class="caption">DA: <strong class="text-brand">€ {{price($this->min)}}</strong>
                            </div>
                            <div class="caption">A: <strong class="text-brand">€ {{price($this->max)}}</strong></div>
                        </div>
                    </div>
                </div>

                @if($uniqueCategories->count())
                    <h5 class="section-title style-1 mb-30 mt-10" style="margin-top:70px !important">Categorie</h5>
                    <ul class="list-group" id="categories">
                        <div class="form-group">

                            @foreach($uniqueCategories as $parentCategory)
                                <div class="chek-form">
                                    <div class="custome-checkbox">
                                        <input wire:model.live="selectedCategories" value="{{ $parentCategory->id }}"
                                               class="form-check-input" type="checkbox"
                                               name="cates[]"
                                               id="differentaddress{{ $parentCategory->id }}"
                                               data-id="{{ $parentCategory->id }}">
                                        <label class="form-check-label label_info" name="cates[]"
                                               data-target="#collapseAddress" href="#collapseAddress"
                                               aria-controls="collapseAddress"
                                               for="differentaddress{{ $parentCategory->id }}">{{ ucfirst($parentCategory->name) }}
                                            ({{ $parentCategory->products_count }})</label>

                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </ul>
                @endif
                @if($uniqueBrands->count())
                    <h5 class="section-title style-1 mb-30 mt-2" style="margin-top:20px !important">Brands</h5>
                    <ul class="list-group" id="brands">
                        <div class="form-group">
                            @foreach($uniqueBrands as $parentBrand)
                                <div class="chek-form">
                                    <div class="custome-checkbox">

                                        <input wire:model.live="selectedBrands" value="{{ $parentBrand->id }}"
                                               name="brend[]"
                                               class="form-check-input" type="checkbox"
                                               id="differentaddres{{ $parentBrand->id }}"
                                               data-id="{{ $parentBrand->id }}">
                                        <label class="form-check-label label_info" name="brend[]"
                                               data-target="#collapseAddres" href="#collapseAddres"
                                               aria-controls="collapseAddres"
                                               for="differentaddres{{ $parentBrand->id }}">{{ ucfirst($parentBrand->name) }}
                                            ({{ $parentBrand->products_count }})</label>

                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </ul>
                @endif
                <a href="{{route('shop.index')}}" class="btn btn-sm btn-default"><i
                            class="fi-rs-filter mr-5"></i> Reset</a>

            </div>
            <!-- Fillter By Price -->
            <!-- Product sidebar Widget -->
            <div class="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                <h5 class="section-title style-1 mb-30">Nuovi arrivi</h5>
                @foreach(getLatestProducts() as $itemP)
                    <div class="single-post d-flex">
                        <div class="image">
                            @if(file_exists(public_path('/uploads/products/' .$itemP->img_01 )) && $itemP->img_01 != null)
                                <a href="{{ route('shop.show',[  $itemP->id,$itemP->slug]) }}"><img
                                            id="img-resize"
                                            src="{{'/uploads/products/' . $itemP->img_01 }}"
                                            alt="{{Str::of('/uploads/products/'. $itemP->img_01)->basename('.jpg')}}"
                                    >
                                </a>
                            @else
                                <a href="{{ route('shop.show',[  $itemP->id,$itemP->slug]) }}"><img id="img-resize"
                                     src="{{'/uploads/default/default.jpg' }}"
                                     alt="{{Str::of('/uploads/default/default.jpg')->basename('.jpg')}}"
                                ></a>
                            @endif
                        </div>
                        <div class="content pt-10">
                            <h5>
                                <a href="{{ route('shop.show',[  $itemP->id,$itemP->slug]) }}">{{$itemP->item_name}}</a>
                            </h5>
                            @if($itemP->stock_qty > 0 && $itemP->purchasable == true)
                                <p class="price mb-0 mt-5">€ {{priceView($itemP->price)}}</p>
                            @endif
                            <div class="product-rate">
                                <div class="product-rating" style="width: 90%"></div>
                            </div>
                        </div>
                    </div>
                @endforeach


            </div>
            <div class="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
                <img src="/assets/imgs/banner/banner-11.png" alt=""/>
                <div class="banner-text">
                    <span>Oganic</span>
                    <h4>
                        Save 17% <br/>
                        on <span class="text-brand">Oganic</span><br/>
                        Juice
                    </h4>
                </div>
            </div>
        </div>
        <div class="col-lg-4-5">
            <div class="shop-product-fillter ">
                <div class="totall-product">
                    @if(!isset($details))
                        <p>
                            {!!__('home.show.1')!!} <strong class="text-brand">{{ $products->firstItem() }}</strong>
                            - {{ $products->lastItem() }}
                            {!!__('home.show.2')!!}  {{$products->total()}} {!!__('home.show.3')!!}
                        </p>
                    @else
                        <p>
                            {!!__('home.show.1')!!} <strong class="text-brand">{{ $products->firstItem() }}</strong>
                            - {{ $products->lastItem() }}
                            {!!__('home.show.2')!!}  {{$products->total()}} {!!__('home.show.3')!!}
                        </p>
                    @endif
                </div>
                <div class="sort-by-product-area">
                    <div class="sort-by-cover mr-10">

                        <div class="sort-by-product-wrap">
                            <div class="sort-by">
                                <span><i class="fi-rs-apps"></i>Mostra:</span>
                            </div>
                            <div class="sort-by-dropdown-wrap">
                                <span> {{ $products->lastItem() }} <i class="fi-rs-angle-small-down"></i></span>
                            </div>
                        </div>
                        <div class="sort-by-dropdown">
                            <ul>
                                <li><a @if($products->lastItem() == '20') class="active"
                                       @endif  wire:click.prevent="loadMore20" href="#bread">20</a></li>
                                <li><a @if($products->lastItem() == '50') class="active"
                                       @endif  wire:click.prevent="loadMore50()" href="#bread">50</a></li>
                                <li><a @if($products->lastItem() == '100') class="active"
                                       @endif  wire:click.prevent="loadMore100()" href="#bread">100</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="sort-by-cover">

                        <div class="sort-by-product-wrap" style="width:100% !important;">
                            <div class="sort-by">
                                <span><i class="fi-rs-apps-sort"></i>Ordina per: @if($this->sortColumnName === 'created_at')
                                        Più
                                        recente
                                        &downarrow;
                                    @endif
                                    @if($sortColumnName === 'item_name' && $sortDirection === 'asc')
                                        Nome A-Z &uparrow;
                                    @endif
                                    @if($sortColumnName === 'item_name' && $sortDirection === 'desc')
                                        Nome Z-A &downarrow;
                                    @endif
                                    @if($sortColumnName === 'price' && $sortDirection === 'asc')
                                        Prezzo Crescente &uparrow;
                                    @endif
                                    @if($sortColumnName === 'price' && $sortDirection === 'desc')
                                        Prezzo
                                        Descrescente
                                        &downarrow;
                                    @endif
                                    @if($sortColumnName === 'updated_at' && $sortDirection === 'asc')
                                        Meno
                                        recente
                                        &uparrow;
                                    @endif
                                    @if($sortColumnName === 'updated_at' && $sortDirection === 'desc')
                                        Più
                                        recente
                                        &downarrow;
                                    @endif
                                </span>
                            </div>
                            <div class="sort-by-dropdown-wrap">
                                <span> <i class="fi-rs-angle-small-down"></i></span>
                            </div>
                        </div>
                        <div class="sort-by-dropdown">
                            <ul>
                                <li><a wire:click.prevent="sortBy('updated_at')"
                                       class="{{ $sortColumnName === 'updated_at' && $sortDirection === 'desc' ? '' : 'text-muted' }}">Più
                                        recente
                                        &downarrow;</a></li>
                                <li>
                                <li><a wire:click.prevent="sortBy('updated_at')"
                                       class="{{ $sortColumnName === 'updated_at' && $sortDirection === 'asc' ? '' : 'text-muted' }}">Meno
                                        recente
                                        &uparrow;</a>
                                </li>
                                <li>
                                    <a wire:click.prevent="sortBy('item_name')"
                                       class="{{ $sortColumnName === 'item_name' && $sortDirection === 'asc' ? '' : 'text-muted' }}"
                                       href="#bread">
                                        Nome A-Z &uparrow;
                                    </a>
                                </li>
                                <li><a wire:click.prevent="sortBy('item_name')"
                                       class="{{ $sortColumnName === 'item_name' && $sortDirection === 'desc' ? '' : 'text-muted' }}">Nome
                                        Z-A
                                        &downarrow;</a></li>
                                <li><a wire:click.prevent="sortBy('price')"
                                       class="{{ $sortColumnName === 'price' && $sortDirection === 'asc' ? '' : 'text-muted' }}">Prezzo
                                        Crescente
                                        &uparrow;</a></li>
                                <li><a wire:click.prevent="sortBy('price')"
                                       class="{{ $sortColumnName === 'price' && $sortDirection === 'desc' ? '' : 'text-muted' }}">Prezzo
                                        Descrescente
                                        &downarrow;</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row product-grid" id="productarea">
                @foreach ($products as $p)
                    <!-- Quick view -->
                    <div class="modal fade custom-modal" id="quickViewModal-{{$p->id}}" tabindex="-1"
                         aria-labelledby="quickViewModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                            <div class="detail-gallery">
                                                <span class="zoom-icon"><i class="fi-rs-search"></i></span>
                                                <!-- MAIN SLIDES -->
                                                <div class="product-image-slider">
                                                    @if(file_exists(public_path('/uploads/products/' .$p->img_01 )) && $p->img_01 != null)
                                                        <figure class="border-radius-10">
                                                            <img src="{{'/uploads/products/' . $p->img_01}}"
                                                                 alt="{{$p->item_name}}">
                                                        </figure>
                                                    @else
                                                        <figure class="border-radius-10">
                                                            <img src="{{'/uploads/default/default.jpg' }}"
                                                                 alt="{{Str::of('/uploads/default/default.jpg')->basename('.jpg')}}"
                                                            >
                                                        </figure>
                                                    @endif

                                                </div>
                                                <!-- THUMBNAILS -->
                                                <div class="slider-nav-thumbnails">
                                                </div>
                                            </div>
                                            <!-- End Gallery -->
                                        </div>
                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                            <div class="detail-info pr-30 pl-30">
                                                <span class="stock-status out-stock"> Sconto 20% </span>
                                                <h3 class="title-detail"><a
                                                            href="{{ route('shop.show',[  $p->id,$p->slug]) }}"
                                                            class="text-heading">{{__($p->item_name)}}</a>
                                                </h3>
                                                <div class="product-detail-rating">
                                                    <div class="product-rate-cover text-end">
                                                        <div class="product-rate d-inline-block">
                                                            <div class="product-rating" style="width: 90%"></div>
                                                        </div>
                                                        <span class="font-small ml-5 text-muted"> (32 reviews)</span>
                                                    </div>
                                                </div>
                                                <div class="clearfix product-price-cover">
                                                    <div class="product-price primary-color float-left">
                                                        @if($p->price > 0)
                                                            <span
                                                                    class="current-price text-brand">€ {{priceView($p->price)}}</span>
                                                        @endif
                                                        <span>
                                                <span class="save-price font-md color3 ml-15">20% Off</span>
                                                <span
                                                        class="old-price font-md ml-15">€ {{priceView((($p->price / 100) * 20.00) + $p->price)}}</span>
                                            </span>
                                                    </div>
                                                </div>
                                                <div class="attr-detail attr-size mb-10">
                                                    {{--                                                    @if(isset($p->base_weight))--}}
                                                    {{--                                                        <strong class="mr-10">Peso: </strong>--}}
                                                    {{--                                                        <ul class="list-filter size-filter font-small">--}}

                                                    {{--                                                            <li class="active"><a--}}
                                                    {{--                                                                    href="#">{!! $p->base_weight!!} g</a>--}}
                                                    {{--                                                            </li>--}}

                                                    {{--                                                        </ul>--}}
                                                    {{--                                                    @endif--}}
                                                    <strong class="mr-10 ">Dimensioni <span class="mr-2"></span> H
                                                        / L / P
                                                        :</strong>
                                                    <ul class="list-filter size-filter font-small">
                                                        @if(isset($p->base_height))
                                                            <li><a
                                                                        href="#"> {!! $p->base_height!!} cm</a>
                                                            </li>
                                                        @endif
                                                        @if(isset($p->base_width))
                                                            <li><a
                                                                        href="#"> {!! $p->base_width!!} cm</a>
                                                            </li>
                                                        @endif
                                                        @if(isset($p->base_depth))
                                                            <li><a
                                                                        href="#"> {!! $p->base_depth!!} cm</a>
                                                            </li>
                                                        @endif
                                                    </ul>
                                                </div>
                                                <div class="attr-detail attr-size mb-30">
                                                    @if(isset($p->base_weight))
                                                        <strong class="mr-10">Peso: </strong>
                                                        <ul class="list-filter size-filter font-small">

                                                            <li class="active"><a
                                                                        href="#">{!! $p->base_weight!!} g</a>
                                                            </li>

                                                        </ul>
                                                    @endif

                                                </div>
                                                <div class="detail-extralink mb-30">

                                                    <div class="product-extra-link2">
                                                        @if($p->stock_qty > 0 && $p->purchasable == true)
                                                            <button
                                                                    onclick="location.href='{{route('addcart', [ $p->id])}}';"
                                                                    type="button" class="button button-add-to-cart"><i
                                                                        class="fi-rs-shopping-cart"></i>Aggiungi al
                                                                carrello
                                                            </button>

                                                        @else
                                                            <button type="button" class="btn btn-primary"
                                                                    data-toggle="modal"
                                                                    data-target="#quickViewModal">
                                                                <i class="w-icon-cart mr-1"></i>Richiedi maggiori
                                                                informazioni
                                                            </button>
                                                            <div class="modal fade custom-modal" id="quickViewModal"
                                                                 tabindex="-1"
                                                                 aria-labelledby="quickViewModalLabel"
                                                                 aria-hidden="true">
                                                                <div class="modal-dialog">
                                                                    <div class="modal-content">
                                                                        <button type="button" class="btn-close"
                                                                                data-bs-dismiss="modal"
                                                                                aria-label="Close"></button>
                                                                        <div class="modal-body">
                                                                            <div class="deal"
                                                                                 style="background-image: url('assets/imgs/banner/popup-1.png')">
                                                                                <div class="deal-top mb-5">
                                                                                    <h6 class="mb-10 text-brand-2">
                                                                                        Richiedi
                                                                                        maggiori
                                                                                        informazioni
                                                                                        per <br>{!! $p->item_name !!}
                                                                                    </h6>
                                                                                </div>
                                                                                <div class="deal-content detail-info">
                                                                                    <form class="custom-form"
                                                                                          action="{{route('sendProduct')}}"
                                                                                          name="contactform" id=""
                                                                                          method="post">
                                                                                        @csrf
                                                                                        <div class="form-group">
                                                                                            <label
                                                                                                    for="name">Nome</label>
                                                                                            <input type="text" id="name"
                                                                                                   name="name"
                                                                                                   class="form-control"
                                                                                                   required>
                                                                                        </div>
                                                                                        <div class="form-group">
                                                                                            <label
                                                                                                    for="email">E-mail</label>
                                                                                            <input type="email"
                                                                                                   id="email"
                                                                                                   name="email"
                                                                                                   class="form-control"
                                                                                                   required>
                                                                                        </div>
                                                                                        <div class="form-group">
                                                                                            <input type="text"
                                                                                                   id="item_name"
                                                                                                   name="item_name"
                                                                                                   class="form-control"
                                                                                                   value="{{$p->item_name}}"
                                                                                                   hidden>
                                                                                        </div>
                                                                                        <div class="form-group">
                                                                                            <input type="text"
                                                                                                   id="item_code"
                                                                                                   name="item_code"
                                                                                                   class="form-control"
                                                                                                   value="{{$p->item_code}}"
                                                                                                   hidden>
                                                                                        </div>
                                                                                        <div class="form-group">
                                                                                            <label for="message">La tua
                                                                                                richiesta</label>
                                                                                            <textarea id="message"
                                                                                                      name="message"
                                                                                                      cols="30"
                                                                                                      rows="5"
                                                                                                      class="form-control"
                                                                                                      style="height:auto !important"></textarea>
                                                                                        </div>
                                                                                        {{--                                                                            <div class="form-group pt-4 mb-4">--}}
                                                                                        {{--                                                                                <div class="g-recaptcha"--}}
                                                                                        {{--                                                                                     data-sitekey="{{env('INVISIBLE_RECAPTCHA_SITEKEY')}}">--}}

                                                                                        {{--                                                                                </div>--}}
                                                                                        {{--                                                                            </div>--}}
                                                                                        <br>
                                                                                        <div class="deal-bottom">
                                                                                            <button type="submit"
                                                                                                    class="btn btn-primary">
                                                                                                INVIA
                                                                                                RICHIESTA
                                                                                            </button>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                                <div class="font-xs">
                                                    <ul>
                                                        <ul class="mr-50 float-start">
                                                            @if(!empty(productDetails([$p->id])))
                                                                <li class="mb-5">Categoria: <span
                                                                            class="text-brand">
                                                                                        @for ($i = 0; $i < count($p->categories); $i++)
                                                                            @if ($i == count($p->categories) - 1)
                                                                                {{ ucFirst($p->categories[$i]->name) }}
                                                                            @else
                                                                                {{ ucFirst($p->categories[$i]->name) }}
                                                                                ->
                                                                    @endif
                                                                    @endfor
                                                                </li>
                                                            @endif
                                                            @if(!empty(productBrandDetails([$p->id])))
                                                                <li class="mb-5 mr-10">Brand:
                                                                    <a
                                                                            href="#">
                                                                        @for ($i = 0; $i < count($p->brands); $i++)
                                                                            @if ($i == count($p->brands) - 1)
                                                                                {{ ucFirst($p->brands[$i]->name) }}
                                                                            @else
                                                                                {{ ucFirst($p->brands[$i]->name) }} ->
                                                                            @endif
                                                                        @endfor
                                                                    </a>
                                                                </li>
                                                            @endif
                                                            @if(!empty(productAttributeDetails([$p->id])))
                                                                <li class="mb-5 mr-10">Attributi: <a
                                                                            href="#">  @for ($i = 0; $i < count($p->attributes); $i++)
                                                                            @if ($i == count($p->attributes) - 1)
                                                                                {{ ucFirst($p->attributes[$i]->name) }}
                                                                            @else
                                                                                {{ ucFirst($p->attributes[$i]->name) }}
                                                                                ->
                                                                            @endif
                                                                        @endfor</a>
                                                                </li>
                                                            @endif
                                                            @if(isset($p->link))

                                                                @if($p->link != null)
                                                                    <li class="mt-2">
                                                                        <strong class="mr-10 mt-3">Link 1: </strong> <a
                                                                                href="{!! $p->link !!}"
                                                                                target="_blank"> {!! $p->link !!}</a>
                                                                    </li>
                                                                @endif
                                                                @if($p->link_2 != null)
                                                                    <li class="mt-2">
                                                                        <strong class="mr-10 mt-3">Link 2: </strong> <a
                                                                                href="{!! $p->link_2 !!}"
                                                                                target="_blank"> {!! $p->link_2 !!}</a>

                                                                    </li>
                                                                @endif

                                                            @endif
                                                        </ul>
                                                    </ul>
                                                </div>
                                            </div>
                                            <!-- Detail Info -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1-3 col-md-3 col-12 col-sm-6">
                        <div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                             data-wow-delay=".1s">
                            <div class="product-img-action-wrap">
                                <div class="product-img product-img-zoom">
                                    <a href="{{ route('shop.show',[  $p->id,$p->slug]) }}">
                                        @if(file_exists(public_path('/uploads/products/' .$p->img_01 )) && $p->img_01 != null)
                                            <img class="default-img" id="img-resize"
                                                 src="{{'/uploads/products/' . $p->img_01 }}"
                                                 alt="{{Str::of('/uploads/products/'. $p->img_01)->basename('.jpg')}}"
                                            >
                                            <img class="hover-img" id="img-resize"
                                                 src="{{'/uploads/products/' . $p->img_01 }}"
                                                 alt="{{Str::of('/uploads/products/'. $p->img_01)->basename('.jpg')}}"
                                            >
                                        @else
                                            <img class="default-img" id="img-resize"
                                                 src="{{'/uploads/default/default.jpg' }}"
                                                 alt="{{Str::of('/uploads/default/default.jpg')->basename('.jpg')}}"
                                            >
                                            <img class="hover-img" id="img-resize"
                                                 src="{{'/uploads/default/default.jpg' }}"
                                                 alt="{{Str::of('/uploads/default/default.jpg')->basename('.jpg')}}"
                                            >
                                        @endif
                                    </a>
                                </div>
                                <div class="product-action-1">
                                    <a aria-label="Aggiungi alla Wishlist" class="action-btn"
                                       href="{{route('addwishlist', [ $p->id])}}"><i
                                                class="fi-rs-heart"></i></a>
                                    <a aria-label="Confronta" class="action-btn"
                                       href="{{route('addToCompare', [ $p->id,$p->slug])}}"><i
                                                class="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" class="action-btn" data-bs-toggle="modal"
                                       data-bs-target="#quickViewModal-{{$p->id}}"><i class="fi-rs-eye"></i></a>

                                </div>
                            </div>
                            <div class="product-content-wrap">
                                @if($uniqueCategories->count())
                                    <div class="product-category">
                                        @if(!empty(productDetails($p->id)['category_id']))
                                            Categoria:
                                            <a
                                                    href="{{ route('categoryPage',[productDetails($p->id)['category_id'],  productDetails($p->id)['category_slug']]) }}">
                                            <span

                                                    style="color: #BF8346;">
                                                   @for ($i = 0; $i < count($p->categories); $i++)
                                                    @if ($i == count($p->categories) - 1)
                                                        {{ ucFirst($p->categories[$i]->name) }}
                                                    @else
                                                        {{ ucFirst($p->categories[$i]->name) }} ->
                                                    @endif
                                                @endfor
                                            </span>

                                            </a>
                                            <br>
                                        @endif
                                        @if(!empty(productDetails($p->id)['brand_id']))
                                            Brand:
                                            <a
                                                    href="">
                                            <span
                                                    style="color: #BF8346;">
                                                   @for ($i = 0; $i < count($p->brands); $i++)
                                                    @if ($i == count($p->brands) - 1)
                                                        {{ ucFirst($p->brands[$i]->name) }}
                                                    @else
                                                        {{ ucFirst($p->brands[$i]->name) }} ->
                                                    @endif
                                                @endfor
                                            </span>
                                            </a>
                                            <br>
                                        @endif

                                        Codice articolo: {{__($p->item_code)}}
                                    </div>
                                    <h2>
                                        <a href="{{ route('shop.show',[  $p->id,$p->slug]) }}">{{__($p->item_name)}}</a>
                                    </h2>
                                    <div class="product-card-bottom">
                                        @if($p->stock_qty > 0 && $p->purchasable == true)
                                            <div class="product-price">
                                                <span>€ {{ priceView($p->price) }}</span>
                                                {{--                                            <span class="old-price">$32.8</span>--}}
                                            </div>
                                            <div class="add-cart">
                                                <a href="{{route('addcart', [ $p->id, $p->slug])}}"
                                                   class="add"
                                                   title="Aggiungi al carrello"><i
                                                            class="fi-rs-shopping-cart mr-5"></i>Acquista</a>
                                            </div>
                                        @else
                                            <div class="product-price" hidden>
                                                <span>€ {{ priceView($p->price) }}</span>
                                                {{--                                            <span class="old-price">$32.8</span>--}}
                                            </div>
                                            <div class="add-cart">
                                                <a href="{{ route('shop.show',[  $p->id,$p->slug]) }}"
                                                   class="add"
                                                   title="Richiedi info"><i
                                                            class="fi-rs-envelope mr-5"></i>Richiedi info</a>
                                            </div>
                                        @endif
                                    </div>
                                @endif


                            </div>
                        </div>
                    </div>

                @endforeach
                <!--end product card-->
            </div>
            <!--product grid-->
            <div class="pagination-area mt-20 mb-20">

                <ul class="pagination justify-content-start">
                    @if(isset($query))
                        {{ $products->appends($query)->onEachSide(1)->links(['scrollTo' => false]) }}
                    @else
                        {{ $products->onEachSide(1)->links('vendor.livewire.bootstrap',['scrollTo' => false]) }}
                    @endif
                </ul>

            </div>
        </div>
    </div>
</div>

@section('extraJs')

    <script type="module">
        $(document).ready(function () {
            if ($("#slider").length) {
                let slider = document.getElementById("slider");
                noUiSlider.create(slider, {
                    start: [1, 1000],
                    connect: true,
                    step: 1,
                    range: {
                        'min': {{$min_price}},
                        'max': {{$max_price}}
                    },
                });

                slider.noUiSlider.on("update", function (value) {
                    @this.
                    set('min', value[0]);
                    @this.
                    set('max', value[1]);
                });
            }
        });
    </script>
    {{--    <script src="/assets/js/sliderCategory.js"></script>--}}
@endsection
