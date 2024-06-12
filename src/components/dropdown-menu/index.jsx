'use client'
import React, { useRef, useState, useEffect } from 'react'
import ThemeSwitcher from './theme-switcher';
import Span from '@/components/ui/Typography/span';
import BgButtonOption from '../ui/Buttons/bg-button-option';
import H6 from '../ui/Typography/h6';
import BgIcon from '../ui/Iconify-icons/bg-icon';
import BgLinkButton from '../ui/Buttons/bg-link-button';
import KeyboardShortcutModal from '@/sections/modals/keyboard-shortcuts';
import CustomerServiceModal from '@/sections/modals/customer-services';


const DropdownMenu = ({ children, className }) => {

    // States and Variables
    const [active, setActive] = useState(false);
    const [showAboutData, setShowAboutData] = useState(false)
    const [showPrivacyData, setShowPrivacyData] = useState(false)
    const [showCreativeData, setShowCreativesData] = useState(false)
    const [showBusinessData, setShowBusinessData] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isCustomerServiesModalOpen, setIsCustomerServiesModalOpen] = useState(false)
    const dropdownRef = useRef(null);

    console.log(isCustomerServiesModalOpen,'isCustomerServiesModalOpen');
    // Data 
    const aboutSubData = [
        { id: "1", label: "关于我们", link: '/' },
        { id: "2", label: "新闻中心", link: '/' },
        { id: "3", label: "社会责任", link: '/' },
        { id: "4", label: "加入我们", link: '/' },
        { id: "5", label: "English", link: '/' },
    ];

    const policiesSubData = [
        { id: "1", label: "用户协议", link: '/' },
        { id: "2", label: "隐私政策", link: '/' },
        { id: "3", label: "侵权投诉指引", link: '/' },
        { id: "4", label: "热点规则", link: '/' },
        { id: "5", label: "社区规范", link: '/' },
        { id: "6", label: "深色模式", link: '/' },
    ];

    const themeIcons = [
        { id: '1', icon: "uil:setting", tooltip: '跟随系统', theme: undefined },
        { id: '2', icon: "ph:sun", tooltip: '浅色模式', theme: "light" },
        { id: '3', icon: "ph:moon", tooltip: '深色模式', theme: "dark" },
    ];
    const creativeButtonDropdownData = [
        {
            id: '1',
            label: '创作服务',
            icon: 'majesticons:arrow-right-line',
            link: "",
        },
        {
            id: '1',
            label: '直播管理',
            icon: 'majesticons:arrow-right-line',
            link: "",

        },
        {
            id: '1',
            label: '电脑直播助手',
            icon: 'majesticons:arrow-right-line',
            link: "",

        },
    ]

    const businessButtonDropdownData = [
        {
            id: '1',
            label: '专业号',
            icon: 'majesticons:arrow-right-line',
            link: "",

        },
        {
            id: '2',
            label: '推广合作',
            icon: 'majesticons:arrow-right-line',
            link: "",

        },
        {
            id: '3',
            label: ' 蒲公英',
            icon: 'majesticons:arrow-right-line',
            link: "",
        },
        {
            id: '4',
            label: ' 商家入驻',
            icon: 'majesticons:arrow-right-line',
            link: '',
        },
        {
            id: '5',
            label: ' MCN入驻',
            icon: 'majesticons:arrow-right-line',
            link: '',
        },
    ]

    // functions 

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
        <>
            <div className='relative z-50 h-full'>

                <div className=' hidden lg:block' onClick={() => setActive(!active)}>{children}</div>

                {active && (
                    // Dropdown div 
                    <div ref={dropdownRef} className={`absolute bottom-14 w-full rounded-xl drop-shadow-lg p-1 border dark:border-neutral-800 dark:bg-neutral-900       bg-dark_primary_label ${className}`}>
                        {/* Data div */}
                        {
                            showAboutData ? (
                                <div className='flex flex-col  divide-y dark:divide-neutral-800 divide-gray-200  '>
                                    <div className="flex items-center p-2 " >
                                        <BgIcon icon={'oui:arrow-left'} className={'!w-6 !h-6'} onClick={() => setShowAboutData(false)} />
                                        <H6 className={'!font-semibold !text-center grow'}>关于小红书</H6>
                                    </div>
                                    <div className=' hide-scrollbar max-h-80 lg:max-h-96 divide-y dark:divide-neutral-800 divide-gray-200 overflow-y-auto '>
                                        <div className="flex flex-col py-1.5">
                                            {
                                                aboutSubData?.map((data) => (
                                                    <BgLinkButton icon={'majesticons:arrow-right-line'} link={data?.link}>{data?.label}</BgLinkButton>
                                                ))
                                            }
                                        </div>
                                        <div className="p-2 ">
                                            <Span className={' dark:!text-dark_tertiary_label !leading-[8px] '}>沪ICP备13030189号 | 营业执照 | 2024沪公网安备31010102002533号 | 增值电信业务经营许可证 沪B2-20150021 | 医疗器械网络交易服务第三方平台备案：(沪)网械平台备字[2019]第00006号 | 互联网药品信息服务资格证书：沪-经营性-2023-0144 | 违法不良信息举报电话：(021)2077 3004 | 上海市互联网举报中心 | 网上有害信息举报专区 | 自营经营者信息 | 网络文化经营许可证：沪网文(2024)1344-086号 | 个性化推荐算法 网信算备310101216601302230019号 © 2014-2024 行吟信息科技（上海）有限公司 地址：上海市黄浦区马当路388号C座 电话：9501-3888
                                            </Span>
                                        </div>
                                    </div>
                                </div>
                            ) : showCreativeData ? (
                                <div className='flex  flex-col  divide-y dark:divide-neutral-800 divide-gray-200'>
                                    <div className="flex items-center p-2 " >
                                        <BgIcon icon={'oui:arrow-left'} className={'!w-6 !h-6'} onClick={() => setShowCreativesData(false)} />
                                        <H6 className={'!font-semibold !text-center grow'}>隐私、协议</H6>
                                    </div>
                                    <div className="flex flex-col">
                                        {
                                            creativeButtonDropdownData?.map((data) => (
                                                <BgLinkButton icon={'majesticons:arrow-right-line'} link={data?.link}>{data?.label}</BgLinkButton>
                                            ))
                                        }
                                    </div>
                                </div>
                            ) : showBusinessData ? (
                                <div className='flex flex-col  divide-y dark:divide-neutral-800 divide-gray-200'>
                                    <div className="flex items-center p-2  " >
                                        <BgIcon icon={'oui:arrow-left'} className={'!w-6 !h-6'} onClick={() => setShowBusinessData(false)} />
                                        <H6 className={'!font-semibold grow !text-center'}>隐私、协议</H6>
                                    </div>
                                    <div className="flex flex-col">
                                        {
                                            businessButtonDropdownData?.map((data) => (
                                                <BgLinkButton icon={'majesticons:arrow-right-line'} link={data?.link}>{data?.label}</BgLinkButton>
                                            ))
                                        }
                                    </div>
                                </div>
                            ) : showPrivacyData ? (
                                <div className='flex flex-col divide-y dark:divide-neutral-800 divide-gray-200  '>
                                    <div className="flex items-center p-2 " >
                                        <BgIcon icon={'oui:arrow-left'} className={'!w-6 !h-6'} onClick={() => setShowPrivacyData(false)} />
                                        <H6 className={'!font-semibold grow !text-center'}>隐私、协议</H6>
                                    </div>
                                    <div className=' hide-scrollbar py-1.5 max-h-96 divide-y dark:divide-neutral-800 divide-gray-200 overflow-y-auto '>
                                        <div className="flex flex-col">
                                            {
                                                policiesSubData?.map((data) => (
                                                    <BgLinkButton icon={'majesticons:arrow-right-line'} link={data?.link}>{data?.label}</BgLinkButton>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col-reverse lg:flex-col gap-2 ">

                                    {/* Services */}
                                    <div className='  lg:border-b dark:border-neutral-800 border-gray-200'>
                                        <BgButtonOption icon={'ep:arrow-right'} onClick={() => setShowAboutData(true)}>关于小红书</BgButtonOption>
                                        <BgButtonOption icon={'ep:arrow-right'} onClick={() => setShowPrivacyData(true)}>隐私 协议</BgButtonOption>
                                        <BgButtonOption onClick={()=>setIsCustomerServiesModalOpen(true)}>帮助与客服</BgButtonOption>
                                    </div>

                                    <div className=' lg:hidden border-b dark:border-neutral-800 border-gray-200'>
                                        <BgButtonOption icon={'ep:arrow-right'} onClick={() => setShowCreativesData(true)}>创作中心</BgButtonOption>
                                        <BgButtonOption icon={'ep:arrow-right'} onClick={() => setShowBusinessData(true)}>电脑直播助手</BgButtonOption>
                                    </div>

                                    {/* Interview method */}
                                    <div className="flex flex-col gap-1  border-b dark:border-neutral-800 border-gray-200">
                                        <Span className={'dark:!text-dark_tertiary_label !text-light_secondary_label p-2'}>访问方式</Span>
                                        <div className="flex flex-col">
                                            <BgButtonOption onClick={() => setIsOpen(true)}>键盘快捷键</BgButtonOption>
                                            <BgButtonOption>添加小红书到桌面</BgButtonOption>
                                            <BgButtonOption>打开小窗模式</BgButtonOption>

                                        </div>
                                    </div>

                                    {/* Theme Switcher */}
                                    <ThemeSwitcher themeIcons={themeIcons} />
                                </div>
                            )
                        }
                    </div>
                )}
                <div className=' block lg:hidden' onClick={() => setActive(!active)}>{children}</div>
            </div>

            {/* Modals  */}
            <KeyboardShortcutModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <CustomerServiceModal isCustomerServiesModalOpen={isCustomerServiesModalOpen} setIsCustomerServiesModalOpen={setIsCustomerServiesModalOpen} />
        </>

    );
};

export default DropdownMenu;
