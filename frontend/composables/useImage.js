export default function useImage() {
    function getHighestResolutionImageUrl(object) {

  
      // Liste des formats par ordre de priorité
      const formatsPriority = ['large', 'medium', 'small']; // Not thumbnail because worse quality than default url
  
      for (let format of formatsPriority) {
        if (object.formats && object.formats[format]) {
          return object.formats[format].url;
        }
      }
  
      // Si aucun format n'est disponible, retournez l'URL par défaut
      return object.url;
    }
  
    return {
      getHighestResolutionImageUrl
    };
  }
  