'use client'
import React, { useRef, useState, useEffect } from 'react'
import ThemeSwitcher from './theme-switcher';
import Span from '@/components/ui/Typography/span';
import H5 from '@/components/ui/Typography/h5';
import BgButtonOption from '../ui/Buttons/bg-button-option';

const DropdownMenu = ({ children, className }) => {
    // States and Variables
    const [active, setActive] = useState(false);
    const dropdownRef = useRef(null);

    // Data 
    const aboutSubData = [
        { id: "1", label: "关于我们", link: '' },
        { id: "2", label: "新闻中心", link: '' },
        { id: "3", label: "社会责任", link: '' },
        { id: "4", label: "加入我们", link: '' },
        { id: "5", label: "English", link: '' },
    ];

    const policiesSubData = [
        { id: "1", label: "用户协议", link: '' },
        { id: "2", label: "隐私政策", link: '' },
        { id: "3", label: "侵权投诉指引", link: '' },
        { id: "4", label: "热点规则", link: '' },
        { id: "5", label: "社区规范", link: '' },
        { id: "6", label: "深色模式", link: '' },
    ];

    const themeIcons = [
        { id: '1', icon: "uil:setting", tooltip: '跟随系统', theme: undefined },
        { id: '2', icon: "ph:sun", tooltip: '浅色模式', theme: "light" },
        { id: '3', icon: "ph:moon", tooltip: '深色模式', theme: "dark" },
    ];



    useEffect(() => {
        const outsideHandler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setActive(false);
            }
        };

        document.addEventListener('mousedown', outsideHandler);
        return () => {
            document.removeEventListener('mousedown', outsideHandler);
        };
    }, []);

    return (
        <div className='relative'>
            <div onClick={() => setActive(!active)}>{children}</div>
            {active && (
                // Dropdown div 
                <div ref={dropdownRef} className={`absolute bottom-14 w-full rounded-xl drop-shadow-lg p-1 border dark:border-neutral-800 dark:bg-neutral-900 bg-dark_primary_label ${className}`}>
                    {/* Data div */}
                    <div className="flex flex-col gap-2 divide-y dark:divide-neutral-800 divide-gray-200">

                        {/* Services */}
                        <div>
                            <BgButtonOption icon={'ep:arrow-right'}>关于小红书</BgButtonOption>
                            <BgButtonOption icon={'ep:arrow-right'}>隐私 协议</BgButtonOption>
                            <BgButtonOption>帮助与客服</BgButtonOption>
                        </div>

                        {/* Interview method */}
                        <div className="flex flex-col gap-1 ">
                            <Span className={'dark:!text-dark_tertiary_label !text-light_secondary_label p-2'}>设置</Span>
                            <div className="flex flex-col">

                                <BgButtonOption>键盘快捷键</BgButtonOption>
                                <BgButtonOption>添加小红书到桌面</BgButtonOption>
                                <BgButtonOption>打开小窗模式</BgButtonOption>

                            </div>
                        </div>

                        {/* Theme Switcher */}
                        <ThemeSwitcher themeIcons={themeIcons} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
