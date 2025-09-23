import './Main.css';
import {Flex, Segmented} from "antd";
import {SupplierCard} from "../../components/SupplierCard/SupplierCard.tsx";
import {useState} from "react";
import {VortexBase} from "../../configs/VortexBase.ts";
import {useMediaQuery} from "react-responsive";

export const Main = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    const [type, setType] = useState(Object.keys(VortexBase)[0]);

    return (
        <Flex
            className="main-page"
            vertical={true}
            gap={30}
        >
            <Segmented
                className="vertical-segmented"
                value={type}
                onChange={(value) => setType(value)}
                options={
                    Object.keys(VortexBase).map(k => ({
                        label: k,
                        value: k
                    }))
                }
                vertical={isMobile}
            />

            <Flex
                gap={20}
                wrap={true}
            >
                {
                    VortexBase[type].map((v, i) => (
                        <SupplierCard
                            key={i}
                            className="card"
                            name={v.name}
                            link={v.link}
                            img={v.img}
                            description={v.description}
                            password={v.password}
                        />
                    ))
                }
            </Flex>
        </Flex>
    );
}