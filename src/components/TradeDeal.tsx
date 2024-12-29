import { formatPrice, formatTime } from "@/utils/format";
import { useEffect, useState } from "react";

interface Trade {
  base: string;
  target: string;
  last: number;
  timestamp: string;
}

interface TradeResponse {
  tickers: Trade[];
}

export default function TradeDeal() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/exchanges/binance/tickers")
      .then((response) => response.json())
      .then((data: TradeResponse) => {
        setTrades(data.tickers || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
        setTrades([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 bg-slate-100 -200 dark:bg-[#1F1F1F] rounded-xl shadow-sm">
      <h2 className="text-sm font-bold mb-6">Live Trading Deals</h2>
      {loading ? (
        <div className="flex flex-col gap-4">
          <div className="animate-pulse">
            <div className="flex justify-between">
              <div className="w-1/3 h-3 bg-gray-800 rounded-md mb-2"></div>
              <div className="w-1/4 h-3 bg-gray-800 rounded-md mb-2"></div>
            </div>
            <div className="flex justify-between">
              <div className="w-1/2 h-3 bg-gray-800 rounded-md mb-2"></div>
              <div className="w-1/3 h-3 bg-gray-800 rounded-md mb-2"></div>
            </div>
          </div>
          <div className="animate-pulse">
            <div className="flex justify-between">
              <div className="w-1/3 h-3 bg-gray-800 rounded-md mb-2"></div>
              <div className="w-1/4 h-3 bg-gray-800 rounded-md mb-2"></div>
            </div>
            <div className="flex justify-between">
              <div className="w-1/2 h-3 bg-gray-800 rounded-md mb-2"></div>
              <div className="w-1/3 h-3 bg-gray-800 rounded-md mb-2"></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {trades.length === 0 ? (
            <p className="text-xs text-gray-400">No data</p>
          ) : (
            <div className="flex flex-col gap-4">
              {trades.slice(0, 2).map((trade, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">Swap</span>
                    <span className="text-xs text-gray-400">
                      {formatTime(trade.timestamp)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">
                      {trade.base}/{trade.target}
                    </span>
                    <span className="text-sm font-bold text-green-600">
                      {formatPrice(trade.last)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
