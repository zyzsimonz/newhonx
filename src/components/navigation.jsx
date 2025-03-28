import '../style/navigation.css'
import { React, useRef } from 'react'
import { Menubar } from 'primereact/menubar'
import { MegaMenu } from 'primereact/megamenu';
import { Menu } from 'primereact/menu'
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function Navigation() {


    const items = [

        {
            label: '不锈钢系列'
        },
        {
            label: '和面机系列'
        },
        {
            label: '蒸烤机系列'
        },
        {
            label: '自助餐系列'
        },

    ]

    // const items = [
    //     {
    //         label: '主页',
    //     },
    //     {
    //         label: '产品中心',
    //         items: [
    //             {
    //                 label: '不锈钢系列'
    //             },
    //             {
    //                 label: '和面机系列'
    //             },
    //             {
    //                 label: '蒸烤机系列'
    //             },
    //             {
    //                 label: '自助餐系列'
    //             },
    //         ]
    //     },
    //     {
    //         label: '制冷设备'
    //     },
    //     {
    //         label: '工程案例'
    //     },
    //     {
    //         label: '关于'
    //     }


    // ];


    const items1 = [
        {
            label: '主页',
        },
        {
            label: '产品中心',
            items: [
                [
                    {
                        label: '不锈钢系列'
                    },
                    {
                        label: '和面机系列'
                    },
                    {
                        label: '蒸烤机系列'
                    },
                    {
                        label: '自助餐系列'
                    },
                ]
            ]
        },
        {
            label: '制冷设备'
        },
        {
            label: '工程案例'
        },
        {
            label: '关于'
        }


    ];


    const menuRight = useRef(null);

    return (
        <div className='card' style={{ with: '100%' }}>
            {/* <ContextMenu model={ items } /> */}
            {/* <Menubar model={items} /> */}

            {/* <ul className='menu'>
                <li><a href='#'>主页</a></li>
                <li className='dropdown'>
                    <a href='#'>产品中心</a>
                    <ul className='dropdown-content'>
                        <li><a href='#'>不锈钢系列</a></li>
                        <li><a href='#'>和面机系列</a></li>
                        <li><a href='#'>蒸烤机系列</a></li>
                        <li><a href='#'>煮面炉系列</a></li>
                        <li><a href='#'>自助餐系列</a></li>
                    </ul>
                </li>
                <li><a href='#'>制冷设备</a></li>
                <li><a href='#'>工程案例</a></li>

                <li><a href='#'>关于</a></li>
            </ul> */}
            <div className="navigation">
                <Button label='首页' text />
                <Menu model={items} popup ref={menuRight} id="popup_menu_right" />
                <Button label="产品中心" text  onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
                <Button label="制冷设备"  text/>
                <Button label='工程案例' text/>
                <Button label='关于' text/>
            </div>


        </div>

    )
}