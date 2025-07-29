// 贺卡翻页效果
const card=document.querySelector(".card");
// 可选：添加气球动画（随机出现气球）
function createBalloon(){const e=document.createElement("div");e.style.position="fixed",e.style.bottom="-50px",// 从底部开始
e.style.left=100*Math.random()+"vw",// 随机左右位置
e.style.width="30px",e.style.height="40px",e.style.borderRadius="50% 50% 40% 40%",// 气球形状
e.style.backgroundColor=["#ff6b8b","#81c784","#64b5f6"][Math.floor(3*Math.random())],// 随机颜色
e.style.animation=`float ${5+5*Math.random()}s linear infinite`,// 上浮动画
document.body.appendChild(e),
// 动画结束后删除气球
setTimeout((()=>e.remove()),1e4)}
// 每2秒生成一个气球
card.addEventListener("click",(()=>{card.classList.toggle("open");document.getElementById("bgm").play().catch((e=>console.log("需要点击后播放音乐")))})),setInterval(createBalloon,2e3);
// 添加气球上浮的CSS动画（需要加在style.css里）
const style=document.createElement("style");style.textContent="\n  @keyframes float {\n    0% { transform: translateY(0); opacity: 1; }\n    100% { transform: translateY(-100vh); opacity: 0; }\n  }\n",document.head.appendChild(style);
// 获取音乐元素和音符图标
const bgm=document.getElementById("bgm"),musicControl=document.getElementById("music-control");
// 点击音符图标播放或暂停音乐
musicControl.addEventListener("click",(()=>{bgm.paused?(bgm.play(),// 播放音乐
musicControl.classList.remove("paused")):(bgm.pause(),// 暂停音乐
musicControl.classList.add("paused"))}));