// format address
export const formatAddress = (address?: string) => {
  return address
    ? address.replace(address?.slice(6, address.length - 4), '...')
    : '--';
};
