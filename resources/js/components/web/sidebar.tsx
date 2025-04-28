import { SidebarMenu } from './sidebar-menu'
import { usePage } from '@inertiajs/react'
import { BookOpen, Boxes, Paintbrush } from 'lucide-react'

export function Sidebar() {
    const { url } = usePage()

    // Find which section contains the current page and should be open by default
    const findDefaultOpenSections = () => {
        for (const section of menuItems) {
            if (section.items?.some(item => item.href === url)) {
                return [section.title]
            }
        }
        return ['Overview']
    }

    const menuItems = [
        {
            title: 'Overview',
            icon: <BookOpen className="w-4 h-4" />,
            items: [
                { title: 'Installation', href: '/docs/installation' },
            ],
        },
        {
            title: 'Components',
            icon: <Boxes className="w-4 h-4" />,
            items: [
                { title: 'Button', href: '/docs/components/button', },
                { title: 'Pattern', href: '/docs/components/pattern' },
                { title: 'Input', href: '/docs/components/input' },
                { title: 'Badge', href: '/docs/components/badge' },
                { title: 'Avatar', href: '/docs/components/avatar' },
            ],
        },
        {
            title: 'Customization',
            icon: <Paintbrush className="w-4 h-4" />,
            items: [
                { title: 'Button Styling', href: '/docs/customization/button' },
                { title: 'Input Styling', href: '/docs/customization/input' },
                { title: 'Pattern Styling', href: '/docs/customization/pattern' },

            ],
        },
    ]

    return (
        <div className="py-2">
            <SidebarMenu
                items={menuItems}
                currentPath={url}
                defaultOpen={findDefaultOpenSections()}
            />
        </div>
    )
}
