import { UserSession } from "user-model";
import { Session } from "../cookie-store/session";
import { useEffect, useId, useState } from "react";
export const useSession = () => {
  const [session, setSession] = useState<UserSession | undefined>(
    Session.getUserSession()
  );

  const id = useId();
  useEffect(() => {
    Session.subscribe(id, (session) => {
      setSession(session);
    });

    return () => {
      Session.unsubscribe(id);
    };
  }, [id]);

  return session;
};
