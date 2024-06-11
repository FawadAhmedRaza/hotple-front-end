import React from 'react'
import { useTheme } from 'next-themes';
import Span from '@/components/ui/Typography/span';
import Paragraph from '@/components/ui/Typography/paragraph';
import Tooltip from '@/components/ui/tooltip';
import Iconify from '@/components/ui/Iconify-icons/Iconify';


const ThemeSwitcher = ({themeIcons}) => {
    const {  theme, setTheme } = useTheme();

      // Functions 
      const handleThemeChange = ( themeLabel) => {
        setTheme(themeLabel === undefined ? 'light' : themeLabel);
    };

    return (
        <div className="flex flex-col gap-3 px-2 py-2.5">
            <Span className={'dark:!text-dark_tertiary_label !text-light_secondary_label'}>设置</Span>
            <div className="flex items-center justify-between">
                <Paragraph className={'dark:!text-dark_secondary_label'}>深色模式</Paragraph>
                <div className="flex justify-evenly items-center dark:bg-[#212121] bg-light_bg_grey w-20 h-7 rounded-full">
                    {themeIcons?.map((icon) => (
                        <Tooltip key={icon?.id} tooltip={icon.tooltip} className={'!text-nowrap -top-9'}>
                            <div className={`group flex justify-center items-center w-6 h-6 rounded-full ${theme === icon?.theme ? 'dark:bg-dark_bg_grey bg-dark_primary_label' : ''}`}>
                                <Iconify
                                    icon={icon?.icon}
                                    className={`!w-3 ${theme === icon?.theme || undefined  ? 'dark:!text-dark_primary_label !text-light_primary_label' : 'dark:!text-dark_tertiary_label group-hover:dark:!text-dark_primary_label !text-light_secondary_label group-hover:!text-light_primary_label'}`}
                                    onClick={() => handleThemeChange(icon?.theme)}
                                />
                            </div>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </div>)
}

export default ThemeSwitcher