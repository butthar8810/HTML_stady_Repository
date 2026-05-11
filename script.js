// 参考：https://fukuokamiyako.com/javascript_slide_02/
const images = [
        "images/capture250-8.png", 
        "images/capture250-1.png", 
        "images/capture250-3.png", 
        "images/capture100-k.png", 
        "images/capture101-k.png"
];
const slidesContainer = document.querySelector('.slides');

// **ダミー画像を含むスライド要素を作成**
const createSlideElements = () => {
    // ダミーとして最後の画像を最初に追加
    const firstDummy = document.createElement('img');
    firstDummy.src = images[images.length - 1]; // 最後の画像
    slidesContainer.appendChild(firstDummy);

    // 実際の画像を追加
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        slidesContainer.appendChild(img);
    });

    // ダミーとして最初の画像を最後に追加
    const lastDummy = document.createElement('img');
    lastDummy.src = images[0]; // 最初の画像
    slidesContainer.appendChild(lastDummy);

    console.log("test");
};


// スライドのセットアップ
createSlideElements();
const slideImages = document.querySelectorAll('.slides img');
let currentIndex = 1; // **実際のスライド開始位置（1枚目の画像）**
const slideWidth = 698;
const waitTime = 5 * 1000; // **スライド移動までの待機時間(m秒)**
let autoSlide;

// ** スライドを移動する関数
// ** moveSlide()
// ** 引数：index(スライド番号)
// ** 返値：無し
// ** 「Indexに指定したスライド番号に遷移する」
const moveSlide = (index) => {
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
    currentIndex = index;
    slidesContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
};

// ** transitionend で瞬時にリセットする関数
// ** resetPosition()
// ** 引数：無し
// ** 返値：無し
// ** 「先頭・末尾ダミーから一周する」
const resetPosition = () => {
    if (currentIndex <= 0) {
        // 先頭ダミーに来たら、本当の最後に瞬時に移動
        slidesContainer.style.transition = 'none';
        currentIndex = images.length;
        slidesContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    } else if (currentIndex >= images.length + 1) {
        // 末尾ダミーに来たら、本当の最初に瞬時に移動
        slidesContainer.style.transition = 'none';
        currentIndex = 1;
        slidesContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    }
};

// ** 自動スライド開始
// ** startAutoPlay()
// ** 引数：無し
// ** 返値：無し
// ** 「自動スライドを開始する」
const startAutoPlay = () => {
    autoSlide = setInterval(() => {
        moveSlide(currentIndex + 1);
    }, waitTime);
};

// ** オートスライド停止
// ** stopAutoPlay()
// ** 引数：無し
// ** 返値：無し
// ** 「自動スライドを停止する」
const stopAutoPlay = () => clearInterval(autoSlide);

// ** オートスライド再開
// ** restartAutoPlay()
// ** 引数：無し
// ** 返値：無し
// ** 「自動スライドを再開始する」
const restartAutoPlay = () => {
    stopAutoPlay();
    startAutoPlay();
};




// ** 初期セットアップ
// ** init()
// ** 引数：無し
// ** 返値：無し
// ** 「初期設定のセットアップ」
const init = () => {
    slidesContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    startAutoPlay();
};


// **イベントリスナー**

// ** 「[次へ]ボタン押下時の処理」
document.querySelector('.next').addEventListener('click', () => {
    moveSlide(currentIndex + 1);
    restartAutoPlay();
});
// ** 「[前へ]ボタン押下時の処理」
document.querySelector('.prev').addEventListener('click', () => {
    moveSlide(currentIndex - 1);
    restartAutoPlay();
});


document.querySelector('.num1').addEventListener('click', () => {
    moveSlide(1);
    restartAutoPlay();
});
document.querySelector('.num2').addEventListener('click', () => {
    moveSlide(2);
    restartAutoPlay();
});
document.querySelector('.num3').addEventListener('click', () => {
    moveSlide(3);
    restartAutoPlay();
});
document.querySelector('.num4').addEventListener('click', () => {
    moveSlide(4);
    restartAutoPlay();
});
document.querySelector('.num5').addEventListener('click', () => {
    moveSlide(5);
    restartAutoPlay();
});


document.querySelector('.stop').addEventListener('click', () => {
    stopAutoPlay();
});
document.querySelector('.restart').addEventListener('click', () => {
    restartAutoPlay();
});




// ** 「transition遷移が完了したときに発火」
slidesContainer.addEventListener('transitionend', resetPosition);
// ** 「ページロードしたときに発火」
window.addEventListener('load', init);




// 参考：https://kekenta-it-blog.com/hamburger-menu-slide-animation-guide/
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const slideMenu = document.querySelector('.slide-menu');

  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    slideMenu.classList.toggle('active');
  });

  // メニュー外クリックで閉じる
  document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !slideMenu.contains(e.target)) {
      hamburger.classList.remove('active');
      slideMenu.classList.remove('active');
    }
  });
});