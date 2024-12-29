 export const formatTime = (timestamp: string): string => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;
    return `${hour12}:${minutes}:${seconds} ${ampm}`;
  };

 export const formatPrice = (price: number): string => {
    return `$ ${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};
  
export const truncateAddress = (address: string, startLength: number = 5, endLength: number = 4): string =>{
  if (typeof address !== "string" || !address.startsWith("0x") || address.length !== 42) {
    throw new Error("Invalid address");
  }

  const start = address.substring(0, startLength + 2);
  const end = address.substring(address.length - endLength);
  return `${start}...${end}`;
}