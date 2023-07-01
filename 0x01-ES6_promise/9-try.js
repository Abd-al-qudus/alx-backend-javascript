export default function guardrail(mathFunction){
  let queue = [];
  res = mathFunction();
  queue.push(res);
  queue.push('Guardrail was processed');
  return queue;
}