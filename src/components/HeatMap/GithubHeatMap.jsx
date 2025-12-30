import { useEffect, useRef } from 'preact/hooks'
import CalHeatmap from 'cal-heatmap'
import 'cal-heatmap/cal-heatmap.css'
// import 'cal-heatmap/dist/cal-heatmap.css';

export default function GithubHeatMap() {
    useEffect(() => {
        const cal = new CalHeatmap()

        cal.paint({
            data: {
                source: 'https://api.github.com/users/adiarhmn/events',
                type: 'json',
            },
        })

        return () => cal.destroy()
    }, [])

    return (
        <div class="px-4 w-full justify-center items-center flex">
            <div id="cal-heatmap" class="overflow-x-auto mx-auto"></div>
        </div>
    )
}
