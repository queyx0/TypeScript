export function logarTempoDeExecucao() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const medotoOriginal = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
      const t1 = performance.now();
      const retorno = medotoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(
        `${propertyKey}, tempo de execução: ${(t2 - t1) / 1000} segundos`
      );
      retorno;
    };

    return descriptor;
  };
}
