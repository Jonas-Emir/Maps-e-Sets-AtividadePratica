function getAdmins(maps) {
  let admins = []
  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key)
    }
  }
  return admins
}

const usuarios = new Map()

usuarios.set('Luiz', 'Admin')
usuarios.set('Jonas', 'Admin')
usuarios.set('Rogério', 'User')
usuarios.set('Jorge', 'Admin')

console.log(getAdmins(usuarios))
