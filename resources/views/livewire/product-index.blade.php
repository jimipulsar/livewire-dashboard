<div class="tab-content">
    <div class="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
        <div class="row product-grid-4">
            @foreach (getRandomProducts() as $p)

                <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                         data-wow-delay=".1s">
                        <div class="product-img-action-wrap">
                            <div class="product-img product-img-zoom">
                                <a href="{{ route('shop.show',[  $p->id,$p->slug]) }}">
                                    @if(file_exists(public_path('/uploads/products/' .$p->img_01 )) && $p->img_01 != null)
                                        <img class="default-img"
                                             src="{{'/uploads/products/' . $p->img_01 }}"
                                             alt="{{Str::of('/uploads/products/'. $p->img_01)->basename('.jpg')}}"
                                             id="img-resize">
                                        <img class="hover-img"
                                             src="{{'/uploads/products/' . $p->img_01 }}"
                                             alt="{{Str::of('/uploads/products/' . $p->img_01)->basename('.jpg')}}"
                                             id="img-resize">
                                    @else
                                        <img class="default-img"
                                             src="{{'/uploads/default/default.jpg' }}"
                                             alt="{{Str::of('/uploads/default/default.jpg')->basename('.jpg')}}"
                                             id="img-resize">
                                        <img class="hover-img" src="{{'/uploads/default/default.jpg' }}"
                                             alt="{{Str::of('/uploads/default/default.jpg')->basename('.jpg')}}"
                                             id="img-resize">
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
                            </div>
                            {{--                                    <div class="product-badges product-badges-position product-badges-mrg">--}}
                            {{--                                        <span class="hot">Hot</span>--}}
                            {{--                                    </div>--}}
                        </div>
                        <div class="product-content-wrap">
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
                                <a>Codice articolo: {{__($p->item_code)}}</a>
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
                        </div>
                    </div>
                </div>
            @endforeach
            <!--end product card-->
        </div>
        <!--End product-grid-4-->
    </div>
    <!--En tab one-->
</div>
