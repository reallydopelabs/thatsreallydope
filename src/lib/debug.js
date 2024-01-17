export function inspectJSON(jsonString) {
  return <pre>{JSON.stringify(jsonString, null, 2)}</pre>
}
