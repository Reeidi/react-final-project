import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/AuthContext';

export default function Logout() {
    const { logout } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate('/');
    }, []);

    return null;
};