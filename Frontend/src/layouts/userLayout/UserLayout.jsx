import { MenuHeader } from "../../components/MenuHeader/MenuHeader";

export function UserLayout(props){
    const {children} = props;
    return(
        <div className="userLayout">
            <div className="userLayout__header">
                <MenuHeader/>
            </div>
            <div className="userLayout__contenido">
                {children}
            </div>
        </div>
    );
}