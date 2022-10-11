var $circle = Snap( '.circle1' );

function anim () {

  // cx の値を 0 にリセット
  $circle.attr( { cx: 0 } );

  // cx の値を 3 秒かけて 500 にアニメーションする
  $circle.animate( {
    cx: 500
  }, 3000, function () {
    anim();
  } );

};

anim();