<?php

function lqip_hero($lq, $hq) {
    $http = !empty($_SERVER['HTTPS']) === true ? 'https:' : 'http:';
    list($width, $height) = getimagesize($hq);
    $paddingBottom = getPercentage($width, $height);

    return <<<EOT
        <div class="lqip">
            <div class="lqip-ratioFill" style="padding-bottom: $paddingBottom"></div>
            <div class="lqip-container">
                <img class="lqip-thumbnail" src="$lq" />
                <canvas class="lqip-canvas"></canvas>
                <img class="lqip-image" data-img="$hq" />
            </div>
            <noscript>
                <img src="$hq" />
            </noscript>
        </div>
EOT;
}