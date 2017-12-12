<template>
  <div>
        <ul class="w-list">
            <li>
                <p>
                    <img src="../../assets/images/x.png" />
                    <span>姓名</span>
                </p>
                <p><span>张晓丽</span></p>
            </li>
            <li>
                <p>
                    <img src="../../assets/images/p.png" />
                    <span>联系方式</span>
                </p>
                <p><span>18984316433</span></p>
            </li>
            <li>
                <p>
                    <img src="../../assets/images/j.png" />
                    <span>申请减重</span>
                </p>
                <p><span>15KG</span></p>
            </li>
            <li>
                <p>
                    <img src="../../assets/images/time.png" />
                    <span>预计时间</span>
                </p>
                <p><span>一个月</span></p>
            </li>
        </ul>

        <ul class="w-list">
            <li>
                <p>
                    <img src="../../assets/images/nl.png" />
                    <span>年龄</span>
                </p>
                <p><span>36周岁</span></p>
            </li>
            <li>
                <p>
                    <img src="../../assets/images/sg.png" />
                    <span>163cm</span>
                </p>
                <p><span>18984316433</span></p>
            </li>
            <li>
                <p>
                    <img src="../../assets/images/t.png" />
                    <span>体重</span>
                </p>
                <p><span>70KG</span></p>
            </li>
            <li>
                <p>
                    <img src="../../assets/images/s.png" />
                    <span>运动</span>
                </p>
                <p><span>轻微</span></p>
            </li>
        </ul>
        <button class="releaseBtn">接受申请</button>
  </div>
</template>

<style lang="scss" scoped>
.rootDiv{
    background:#F4F5F7;
}
ul.w-list{
    margin-bottom:0.3rem;
    background: #FFF;
}

ul.w-list li{
    padding-left:0.52rem;
    padding-right:0.52rem;

    p{
      width:40%;
    }

    p:nth-child(1){
        width:60%;
        span{
            font-size:0.32rem;
            display: inline-block;
            width:1.3rem;
        }

        i{
            font-size:0.28rem;
            color:$grayColor;
            margin-left:0.2rem;
        }
    }

    p:nth-child(2) {
        span{color:$grayColor;}
    }
}

</style>