window.addEventListener("DOMContentLoaded", init);

function init() {
  const width = 1899;
  const height = 940;

  //回転の速さを変えるための変数
  var rx=0.01;
  var ry=0.01;

  //テキスト
  var text = document.createElement('div');
  text.style.position = 'absolute';
  text.style.width = 100;
  text.style.height = 100;
  text.style.color="white";
  text.innerHTML = "オブジェクトの回転";
  text.style.top = 30 + 'px';
  text.style.left = 780 + 'px';
  text.style.fontSize=40+'px';
  document.body.appendChild(text);

  //（操作方法）
  var text1 = document.createElement('div');
  text1.style.position = 'absolute';
  text1.style.width = 100;
  text1.style.height = 100;
  text1.style.color="white";
  text1.innerHTML = "遊び方と操作方法";
  text1.style.top = 800 + 'px';
  text1.style.left = 880 + 'px';
  text1.style.fontSize=25+'px';
  document.body.appendChild(text1);

  //（説明）
  var text2 = document.createElement('div');
  text2.style.position = 'absolute';
  text2.style.width = 100;
  text2.style.height = 100;
  text2.style.color="white";
  text2.innerHTML = "W・A・S・D キーを使ってオブジェクトを速度を変更して回転させたり、回転を停止することができます。";
  text2.style.top = 850 + 'px';
  text2.style.left = 500 + 'px';
  text2.style.fontSize=20+'px';
  document.body.appendChild(text2);

  addEventListener( "keydown", key1 );

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas")});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45,width / height,1,10000);
  camera.position.set(0, 0, +1000);
  
  // 箱を作成
  const geometry = new THREE.BoxGeometry(300, 300, 300);

  
    const material = new THREE.MeshStandardMaterial({color: 0xffff});

  const box = new THREE.Mesh(geometry, material);
  scene.add(box);

  // 平行光源
  const light = new THREE.DirectionalLight(0xffffff);
  light.intensity = 2; // 
  light.position.set(1, 1, 1);
  
  // シーンに追加
  scene.add(light);

  // 初回実行
  tick();

  function tick() {
    requestAnimationFrame(tick);

    // 箱を回転させる
    box.rotation.x += rx;
    box.rotation.y += ry;

    // レンダリング
    renderer.render(scene, camera);
  }

  //押されたキーを呼び出す
  function key1( event ) {

    //キーコードを取得するための変数
    var key_code = event.keyCode;
 
    //Aキー rxの数値を上げる
    if( key_code === 65 )
    {
     rx+=0.01;

    }

    //Dキー rxの数値を下げる
    if( key_code === 68 )
    {
     rx-=0.01;

    }

    //Wキー ryの数値を上げる
    if( key_code === 87 )
    {
     ry+=0.01;

    }

    //Sキー ryの数値を下げる
    if( key_code === 83 )
    {
     ry-=0.01;
     
    }

  }

}
