export default defineEventHandler((event) => {
  assertDevOnly(event)

  const store = readStore()
  return {
    profiles: store.profiles.map(maskProfile),
    activeProfileId: store.activeProfileId
  }
})
