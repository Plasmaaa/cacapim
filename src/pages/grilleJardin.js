import React from 'react';
import { ResponsiveWaffle } from '@nivo/waffle';

const MyResponsiveWaffle = ({ data }) => {
    // S'assurer que les données sont passées et non undefined
    if (!data) {
        return <div>Loading data...</div>;
    }

    return (
        <ResponsiveWaffle
            data={data}
            total={49} // 7 * 7
            rows={7}
            columns={7}
            padding={1}
            valueFormat=".0f"
            margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
            colors={{ scheme: 'set3' }}
            borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
            motionStagger={2}
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    justify: false,
                    translateX: -200,
                    translateY: 0,
                    itemsSpacing: 4,
                    itemWidth: 93,
                    itemHeight: 78,
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    itemTextColor: '#777',
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000',
                                itemBackground: '#f7fafb'
                            }
                        }
                    ]
                }
            ]}
        />
    );
};

// Données de démonstration, où chaque 7ème élément pourrait être représenté par un arbre
const data = Array.from({ length: 49 }, (_, i) => ({
    id: i % 7 === 0 ? 'Tree' : 'Empty',
    label: i % 7 === 0 ? 'Tree' : 'Empty',
    value: 1
}));

export default function App() {
    return <MyResponsiveWaffle data={data} />;
}
