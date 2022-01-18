import {BuildingShop} from '@styled-icons/fluentui-system-filled/BuildingShop';
import styled from 'styled-components';


const KitchenIcon = ({ like, setLike }) => {
  return (
    <div>
        {like ? <KitchenIcon/>:<KitchenIcon/>}
    </div>
  );
};

export const KitchenIcon = styled(BuildingShop)`
color: black;
width: 25px;
height: 25px;`