import React from 'react';
import { Image } from 'primereact/image'
import '../style/gateface.css';

export default function GateFace() {

    return (
        <div className='gateface'>
                <Image src="images/big-gate.png" width='97%' height='350px' />
                <div className='profile'>
                    <p>深圳市新弘象实业发展有限公司是一家专注商用厨房设备工程的企业，公司团队在餐饮厨房设备工程行业有近30年的行业经验，服务过许多知名餐饮品牌，经过近30年的行业沉淀，秉承专注、品质、服务的经营理念，定位服务于中高端餐饮品牌，供应中高端餐饮设备。
                        公司团队坚信，通过专注的行业精神，优良的产品品质，贴心的服务水准，赋能各大餐饮企业，做到合作共赢，携手创建新目标，落实新发展，实现新气象。
                    </p>
                    <p>
                        Shenzhen Xin Hong Xiang Industrial Development Co., Ltd. is a focus on commercial kitchen equipment engineering enterprises, the company team in the catering kitchen equipment engineering industry has nearly 30 years of industry experience, service many well-known catering brands, after nearly 30 years of industry precipitation,
                        adhering to the focus, quality, service business philosophy, positioning service in the high-end catering brand, supply of high-end catering equipment.
                        The company team firmly believes that through the dedicated industry spirit, excellent product quality, intimate service level, empower major catering enterprises to achieve win-win cooperation, work together to create new goals, implement new development, and achieve a new atmosphere.
                    </p>
                
            </div>
        </div>
    );
}