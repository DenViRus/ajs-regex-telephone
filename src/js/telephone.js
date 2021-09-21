export function getTelephone(phone) {
  const telephone = phone.toString().replace(/([\D])/g, '');

  if (telephone.length === 11 && /^8/.test(telephone)) {
    return telephone.replace(/^8/, '+7');
  }

  return telephone.replace(/^/, '+');
}
