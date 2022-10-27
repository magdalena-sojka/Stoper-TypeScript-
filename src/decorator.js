export function measurePerformance(target: any, name: string, descriptor: any) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args) {
   const start = performance.now()
   const result = originalMethod.apply(this, args)
   const finish = performance.now()
   console.info(`${name} execution time is ${finish - start} milliseconds`)
   return result;
 }
}
