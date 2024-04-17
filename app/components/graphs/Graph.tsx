import React, { useEffect, useRef, useState } from 'react';
import Papa from 'papaparse';
import * as d3 from 'd3';

const Graph: React.FC = () => {
    const [data, setData] = useState<Array<any>>([]);
    const d3Container = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        fetch('/time.csv')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(csvText => {
                Papa.parse(csvText, {
                    header: true,
                    complete: (results) => {
                        console.log('Parsed CSV data:', results.data);
                        // Convert date and count properly
                        results.data.forEach((d: any) => {
                            d["Start Time"] = d3.timeParse("%Y-%m-%d %H:%M:%S")(d["Start Time"]);
                            d.count = +d.count;  // Convert count to a number if it's not already
                        });
                        setData(results.data);
                    }
                });
            })
            .catch(error => {
                console.error('Error fetching or parsing the CSV:', error);
            });
    }, []);

    useEffect(() => {
        if (data.length > 0 && d3Container.current) {
            const svg = d3.select(d3Container.current);
            const margin = { top: 20, right: 30, bottom: 30, left: 50 };
            const width = 960 - margin.left - margin.right;
            const height = 500 - margin.top - margin.bottom;

            // Clear SVG in case of re-render
            svg.selectAll("*").remove();

            const chart = svg.append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);

            // Set up the scales
            const x = d3.scaleTime()
                .domain(d3.extent(data, d => d["Start Time"]))
                .range([0, width]);
            const y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.count)])
                .range([height, 0]);

            // Add X axis
            chart.append("g")
                .attr("transform", `translate(0,${height})`)
                .call(d3.axisBottom(x));

            // Add Y axis
            chart.append("g")
                .call(d3.axisLeft(y));

            // Add the line
            chart.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 2)
                .attr("d", d3.line<any>()
                    .x(d => x(d["Start Time"]))
                    .y(d => y(d.count))
                );
        }
    }, [data]);

    return (
        <div className="flex w-full grid gap-x-8 grid-cols-2 pt-28">
            <svg ref={d3Container} width={960} height={500}></svg>
            <h1 className='text-2xl place-self-center z-10'>Chicago gets cold during the winter months, electric scooter usage drops too. </h1>
        </div>
    );
};

export default Graph;
