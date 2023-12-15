import { MenuHeader } from "../../components/MenuHeader/MenuHeader";
import { useAuth } from "../../hooks/useAuth";

export function AdminLayout(props){
    const {children} = props;
    const {auth} = useAuth();

    return(
        <div className="adminLayout">
            <div className="adminLayout__header">
                <MenuHeader/>
            </div>
            <div className="adminLayout__contenido">
                {children}
            </div>
        </div>
    );
}