// @ts-nocheck
'use client';
import { useEffect, useState } from 'react';
import { getUserIp } from '@/lib/getUserIp';
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Examples() {
  const [ip, setIp] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIPData = async () => {
      try {
        const userIp = await getUserIp();
        setIp(userIp);

        const res = await fetch(`/api/ip-location?ip=${userIp}`);
        const data = await res.json();
        setLocation(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching IP location:', error);
        setLoading(false);
      }
    };

    fetchIPData();
  }, []);

  return (
    <div className='container mt-10'>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 flex justify-center">Some Examples</h2>
      <div className="flex flex-col justify-center items-center mt-5">
      {loading ? (
        <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
        </Button>
      ) : (
        <>
          <p>Your IP address: {ip}</p>
          {location ? (
            <>
              <p>Country: {location.country_code} ({location.country_name})</p>
              <p>Network Provider: {location.as}</p>
            </>
          ) : (
            <p>Unable to fetch IP location information.</p>
          )}
        </>
      )}
      </div>
    </div>
  );
}